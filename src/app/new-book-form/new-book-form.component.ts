import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router';
import { Book, BookReadStates, Grades, TodoBook } from '../shared/interfaces';
import { BookManagementService } from '../shared/services/book-management.service';
import { CastingCouchService } from '../shared/services/casting-couch.service';

@Component({
  selector: 'app-new-book-form',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './new-book-form.component.html',
  styleUrl: './new-book-form.component.scss'
})
export class NewBookFormComponent implements OnInit {
  //this componetn should be displayed in a popout window.
  //this way the form wont take away any space and you can
  //start multiple new forms without finfishing any.
  //on devices without popout (i think smartphones eg)
  //link to this page with redirect back on finish
  //only the isbn is necessary to find the book, but when no book is found, a new one will be created.
  //the title input will become mandatory
  //class halfoptional -> becomes neccessary under cerain conditions

  newBookForm:any;

  grades:{[key:number]:{short:string, long:string}};

  constructor(private caster:CastingCouchService,private bookService:BookManagementService,private formBuilder:FormBuilder) {
    this.grades = Grades;

    //noteworthy methods: patchValue, setValidators, updateValueAndValidity
    this.newBookForm = this.formBuilder.group({
      isbn : ['', Validators.required],
      author : this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      publisher : formBuilder.group({
        name: ['', Validators.required]
      }),
      title : ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  newBookSubmit(/*?*/) {
    //todo:
    //if not enough info: https://isbndb.com/apidocs/v2
    let tmpForm = this.newBookForm.value;
    let tmpBook:Book = {
      isbn: tmpForm.isbn,
      author: tmpForm.author,
      title: tmpForm.title,
      publisher: tmpForm.publisher,
      //todo[important] get pages with api or form field
      pages: 404,

      extended_title: tmpForm.extended_title,
      thoughts: tmpForm.thoughts,

      more_pages: undefined,
      extra_info: undefined,
      read_state: BookReadStates.exists
    };
    //todo: check if following flow better
    //create a book and add to db
    //check if todo or review criteria is met
    //transform book to todo or review if neccessary
    if (tmpForm.started !== null) {
      //reviewed book
      if (tmpForm.finished !== null && tmpForm.quicknote !== '') {
        const newRevBook = this.caster.getNewReviewedBook(tmpBook, {id:'tbd', startDate:tmpForm.started, finishDate:tmpForm.finished,quicknote:tmpForm.quicknote});
        this.bookService.addReviewed(newRevBook);
      }
      //todo book
      else {
        const newToBook:TodoBook = {
          ...tmpBook,
          read_state: BookReadStates.todo,
          started: tmpForm.started
        }
        this.bookService.addTodo(newToBook);
      }
    }
    //other book
    else {
      this.bookService.addOther(tmpBook);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router';
import { Book } from '../shared/interfaces';
import { MemoryDbService } from '../shared/services/memory-db.service';

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

  constructor(private formBuilder:FormBuilder, private dbService:MemoryDbService) {
    //noteworthy methods: patchValue, setValidators, updateValueAndValidity
    this.newBookForm = this.formBuilder.group({
      isbn : ['', Validators.required],
      title : ['', Validators.required],
      extendedTitle : ['', Validators.required],
      author : ['', Validators.required],
      publisher : ['', Validators.required],
      started : ['', Validators.required],
      finished : ['', Validators.required],
      quicknote : ['', Validators.required],
      thoughts : ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
  }

  newBookSubmit(/*?*/) {
    let tmpForm = this.newBookForm.value;
    let tmpBook:Book = {
      isbn: tmpForm.isbn,
      author: tmpForm.author,
      title: tmpForm.title,
      publisher: tmpForm.publisher,
      pages: 404,

      extended_title: tmpForm.extended_title,
      thoughts: tmpForm.thoughts,

      more_pages: null,
      extra_info: null,
    };
    this.dbService.addBook(tmpBook);
    console.log('test', this.newBookForm.value);
  }
}

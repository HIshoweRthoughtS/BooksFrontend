import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router';
import { Book, Grades } from '../../../shared/interfaces';
import { BookManagementService } from '../../../shared/services/book-management.service';
import { CastingCouchService } from '../../../shared/services/casting-couch.service';

import { Output, EventEmitter } from '@angular/core';


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

  @Output() newBookEvent = new EventEmitter<Book>();

  bookForm:FormGroup<any>;

  grades:{[key:number]:{short:string, long:string}};

  constructor(private caster:CastingCouchService,private bookService:BookManagementService,private formBuilder:FormBuilder) {
    this.grades = Grades;

    //noteworthy methods: patchValue, setValidators, updateValueAndValidity
    this.bookForm = this.formBuilder.group({
      isbn : ['', Validators.required],
      title : ['', Validators.required],
      author : this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      publisher : formBuilder.group({
        name: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
  }

  newBookSubmit(/*?*/) {
    this.bookForm.disable();
    this.newBookEvent.emit(this.bookForm.getRawValue());
  }
}

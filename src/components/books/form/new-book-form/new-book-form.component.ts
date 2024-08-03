import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router';

import { Output, EventEmitter } from '@angular/core';
import { NewAuthorFormComponent } from "../new-author-form/new-author-form.component";
import { NewPublisherFormComponent } from '../new-publisher-form/new-publisher-form.component';


@Component({
  selector: 'new-book-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, NewAuthorFormComponent, NewPublisherFormComponent],
  templateUrl: './new-book-form.component.html',
  styleUrl: './new-book-form.component.scss'
})
//todo: rename this 'book' to coverinfo or smth. not whole book, just title and isbn etc
export class NewBookFormComponent implements OnInit {
  //this componetn should be displayed in a popout window.
  //this way the form wont take away any space and you can
  //start multiple new forms without finfishing any.
  //on devices without popout (i think smartphones eg)
  //link to this page with redirect back on finish
  //only the isbn is necessary to find the book, but when no book is found, a new one will be created.
  //the title input will become mandatory
  //class halfoptional -> becomes neccessary under cerain conditions

  @Input() parentForm: {name: string, controls: FormGroup<any>} | undefined;

  @Output() newBookEvent = new EventEmitter<any>();

  bookForm:FormGroup<any>;

  constructor(private formBuilder:FormBuilder) {
    //noteworthy methods: patchValue, setValidators, updateValueAndValidity
    this.bookForm = this.formBuilder.group({
      isbn : ['', Validators.required],
      title : ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.parentForm) {
      this.parentForm.controls.addControl(this.parentForm.name, this.bookForm);
      this.bookForm.setParent(this.parentForm.controls);
    }
  }

  submitNewBook(/*?*/) {
    this.bookForm.disable();
    this.newBookEvent.emit(this.bookForm.getRawValue());
    this.bookForm.enable();
  }
}

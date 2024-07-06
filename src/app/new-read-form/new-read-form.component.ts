import { Component, OnInit } from '@angular/core';
import { MemoryDbService } from '../shared/services/memory-db.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/interfaces';
import { Grades } from '../shared/interfaces';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookManagementService } from '../shared/services/book-management.service';

@Component({
  selector: 'app-new-read-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-read-form.component.html',
  styleUrl: './new-read-form.component.scss'
})
export class NewReadFormComponent implements OnInit {
  newReadForm!:FormGroup<any>;

  books$:Observable<Book[]>;
  selectedBook?:Book;

  constructor(private aRoute:ActivatedRoute,private bookService:BookManagementService,private formBuilder:FormBuilder) {
    this.books$ = bookService.Books;
    this.selectedBook = undefined; //handle url params to change this

  }

  ngOnInit(): void {
    this.newReadForm = this.formBuilder.group({
      isbn: [null, Validators.required],
      startDate: [null, Validators.required],
      finishDate: [null, Validators.required],
      quicknote: ['', ],
      review: ['', ],
      essay: ['', ],
    });
    this.handleUrlParams();
  }

  private handleUrlParams(): void {
    const urlIsbn = this.aRoute.snapshot.queryParamMap.get('isbn');
    //todo[later,good enough for now]: books.find isbn
    //if found -> display in dropdown
    //if not found -> redirect to new book form with redirect back on succes if popout not working yet or on phone
    this.newReadForm.patchValue({isbn:urlIsbn});
  }

  createNewRead() {


    //if a new read(a new reviewdBook) is created from a todo, this todo must be deleted(replaced by the new reviewedbook)
  }
}

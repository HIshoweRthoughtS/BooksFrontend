import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookReadStates, Grades, Read } from '../shared/interfaces';
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

  reviewed$:Observable<Book[]>;
  todo$:Observable<Book[]>;

  grades:{[key:number]:{short:string, long:string}};

  constructor(private aRoute:ActivatedRoute,private bookService:BookManagementService,private formBuilder:FormBuilder) {
    this.reviewed$ = bookService.Reviews;
    this.todo$ = bookService.Todos;

    this.grades = Grades;
  }

  ngOnInit(): void {
    this.newReadForm = this.formBuilder.group({
      isbn: [null, Validators.required],
      startDate: [null, Validators.required],
      finishDate: [null, Validators.required],
      quicknote: ['', Validators.required],
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

  //reads have to be created on an existing book.
  //todo[later,luxus]: create new book from new read via redirect or popout
  createNewRead() {
    const formValues = this.newReadForm.value;
    const newRead:Read = {
      id: "tbd",
      startDate: formValues.startDate,
      finishDate: formValues.finishDate,
      quicknote: formValues.quicknote,
      review: formValues.review,
      short_essay: formValues.essay
    }
    this.bookService.addReadFindBook(newRead, formValues.isbn);
  }
}

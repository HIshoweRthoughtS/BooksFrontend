import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewReviewComponent } from '../new-review/new-review.component';
import { Grades } from '../../../../shared/interfaces';
import { BooksService } from '../../../../shared/services/manager/books.service';


@Component({
  selector: 'new-read-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NewReviewComponent],
  templateUrl: './new-read-form.component.html',
  styleUrl: './new-read-form.component.scss'
})
export class NewReadFormComponent implements OnInit {

  newReadForm!:FormGroup<any>;
  allQN = Grades;
  quicknotes = Object.keys(this.allQN);

  constructor(private aRoute:ActivatedRoute,private formBuilder:FormBuilder,private readonly bookd:BooksService) {

  }

  ngOnInit(): void {
    this.newReadForm = this.formBuilder.group({
      book_id_ref: ['', Validators.required],
      started_read_date: [null, Validators.required],
      finished_read_date: [formatDate(new Date(),'yyyy-MM-dd', 'en'), Validators.required],
      thoughts: [''],
      quicknote: ['', Validators.required],
      remove_todo_id: [null]
    });
    this.newReadForm.get('book_id_ref')?.disable();
    this.handleUrlParams();
    console.log(this.newReadForm);
  }

  private handleUrlParams(): void {
    const urlBookId = this.aRoute.snapshot.queryParamMap.get('bookref');
    const urlStartDate = this.aRoute.snapshot.queryParamMap.get('startdate');
    const urlRemoveTodoId = this.aRoute.snapshot.queryParamMap.get('removetodo');
    //todo[later,good enough for now]: books.find isbn
    //if found -> display in dropdown
    //if not found -> redirect to new book form with redirect back on succes if popout not working yet or on phone
    if (urlBookId) {
      this.newReadForm.patchValue({book_id_ref:urlBookId});
    }
    if (urlStartDate) {
      this.newReadForm.patchValue({started_read_date:formatDate(new Date(parseInt(urlStartDate)),'yyyy-MM-dd', 'en')});
    }
    if (urlRemoveTodoId) {
      this.newReadForm.patchValue({remove_todo_id:urlRemoveTodoId});
    }
  }

  //reads have to be created on an existing book.
  //todo[later,luxus]: create new book from new read via redirect or popout
  createNewRead() {
    this.bookd.sendCreateNewRead(this.newReadForm.getRawValue()).subscribe(console.log);
  }
}

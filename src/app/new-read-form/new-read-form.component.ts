import { Component, OnInit } from '@angular/core';
import { MemoryDbService } from '../shared/services/memory-db.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/interfaces';
import { Grades } from '../shared/interfaces';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-read-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-read-form.component.html',
  styleUrl: './new-read-form.component.scss'
})
export class NewReadFormComponent implements OnInit {
  newReadForm:any;

  books$:Observable<Book[]>;

  constructor(private formBuilder:FormBuilder,private dbService:MemoryDbService) {
    this.books$ = dbService.Books;
  }

  ngOnInit(): void {
    this.newReadForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      finishDate: [null, Validators.required],
      quicknote: ['', ],
      review: ['', ],
      essay: ['', ],
    })
  }

  createNewRead() {

  }
}

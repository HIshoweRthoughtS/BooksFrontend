import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/services/manager/books.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SimpleBook } from '../../../shared/interfaces';
import { AccountsService } from '../../../shared/services/manager/accounts.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'all-books',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {

  public finishDetailForm:FormGroup<any>;
  public books$: Observable<SimpleBook[]>;

  constructor(
    private readonly bookd:BooksService,
    private readonly accd:AccountsService,
    private readonly router:Router,
    private readonly fb:FormBuilder)
  {
    this.finishDetailForm = fb.group({
      last_page: [null, Validators.required],
      last_chapter: [null]
    });
    this.books$ = this.bookd.sendGetAll('test');
  }

  ngOnInit(): void { }

  startRead(b:SimpleBook) {
    this.bookd.sendCreateNewTodo(b).subscribe((res:any) => {if (res.info ==='success') {
      this.router.navigate([/*'/'*/'..', this.accd.Loginname, 'todo']);
    }});
  }
}

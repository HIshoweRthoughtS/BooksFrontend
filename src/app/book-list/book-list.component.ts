import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, ReviewedBook, TodoBook } from '../shared/interfaces';
import { CommonModule } from '@angular/common';
import { BoolPipe } from '../shared/bool.pipe';
import { RouterLink } from '@angular/router';
import { BookManagementService } from '../shared/services/book-management.service';

@Component({
  selector: 'app-review-table',
  standalone: true,
  imports: [CommonModule,BoolPipe,RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  reads$:Observable<ReviewedBook[]>;
  todos$:Observable<TodoBook[]>;
  //todo: maybe expose bookservice obs that does this, or have leftoverbooks even in db
  leftoverbooks:Book[];
  //creating new books should be possible at least here, maybe reviews as well
  //<a [routerLink]="['/newbook']"> || [queryParams]="{para: value}"
  constructor(private bookService:BookManagementService) {
    this.reads$ = bookService.Reviews;
    this.todos$ = bookService.Todos;
    this.leftoverbooks = [];
  }

  ngOnInit(): void {
    this.bookService.Books.subscribe((books:Book[]) => {
      books.forEach((book:Book) => {
        //wenn ein buch weder reviewed wurde, noch todo ist
        if (!this.bookService.reviewsContain(book) && !this.bookService.todoContain(book)) {
          this.leftoverbooks.push(book);
        }
      });
    });
  }
}

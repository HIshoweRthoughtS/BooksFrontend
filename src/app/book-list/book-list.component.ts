import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, ReviewedBook, TodoBook } from '../shared/interfaces';
import { MemoryDbService } from '../shared/services/memory-db.service';
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
export class BookListComponent {
  reads$:Observable<ReviewedBook[]>;
  todos$:Observable<TodoBook[]>;
  //creating new books should be possible at least here, maybe reviews as well
  //<a [routerLink]="['/newbook']"> || [queryParams]="{para: value}"
  constructor(private bookService:BookManagementService) {
    this.reads$ = bookService.Reviews;
    this.todos$ = bookService.Todos;
  }
}

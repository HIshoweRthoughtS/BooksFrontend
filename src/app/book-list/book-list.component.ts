import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/interfaces';
import { MemoryDbService } from '../shared/services/memory-db.service';
import { CommonModule } from '@angular/common';
import { BoolPipe } from '../shared/bool.pipe';

@Component({
  selector: 'app-review-table',
  standalone: true,
  imports: [CommonModule,BoolPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books$:Observable<Book[]>;
  //creating new books should be possible at least here, maybe reviews as well
  //<a [routerLink]="['/newbook']"> || [queryParams]="{para: value}"
  constructor(private dbService:MemoryDbService) {
    this.books$ = dbService.Books;
  }
}

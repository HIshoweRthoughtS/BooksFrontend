import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, ReviewedBook, TodoBook } from '../../../shared/interfaces';
import { CommonModule } from '@angular/common';
import { BoolPipe } from '../../../shared/bool.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-review-table',
  standalone: true,
  imports: [CommonModule,BoolPipe,RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  //creating new books should be possible at least here, maybe reviews as well
  //<a [routerLink]="['/newbook']"> || [queryParams]="{para: value}"
  
  constructor() {
  }

  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/services/manager/books.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {

  public books$: Observable<any>;

  constructor(private readonly bookd:BooksService) {
    this.books$ = this.bookd.sendGetAll('test').pipe(map((res:any) => res.detail));
  }

  ngOnInit(): void { }

}

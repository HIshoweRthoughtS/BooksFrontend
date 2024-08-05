import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/services/manager/books.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BE_Book_A_Name_P_Title } from '../../../shared/interfaces';

@Component({
  selector: 'all-books',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {

  public books$: Observable<BE_Book_A_Name_P_Title[]>;

  constructor(private readonly bookd:BooksService) {
    this.books$ = this.bookd.sendGetAll('test').pipe(map((res:any) => res.detail));
  }

  ngOnInit(): void { }

  startRead(b:BE_Book_A_Name_P_Title) {
    //todo: do some logik
    //todo: maybe forward to todo page
  }

}

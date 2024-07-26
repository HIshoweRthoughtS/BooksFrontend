import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/services/manager/books.service';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {

  constructor(private readonly bookd:BooksService) {}

  ngOnInit(): void {
    this.bookd.sendGetAll('test');
  }

}

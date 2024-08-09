import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/services/manager/books.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SimpleBook } from '../../../shared/interfaces';
import { AccountsService } from '../../../shared/services/manager/accounts.service';

@Component({
  selector: 'all-books',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {

  public books$: Observable<SimpleBook[]>;

  constructor(
    private readonly bookd:BooksService,
    private readonly accd:AccountsService,
    private readonly router:Router) {
    this.books$ = this.bookd.sendGetAll('test').pipe(map((res:any) => res.detail));
  }

  ngOnInit(): void { }

  startRead(b:SimpleBook) {
    this.bookd.sendCreateNewTodo(b).subscribe((res:any) => {if (res.info ==='success') {
      this.router.navigate([/*'/'*/'..', this.accd.Loginname, 'booklist']);
    }});
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoolPipe } from '../../../shared/bool.pipe';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from '../../../shared/services/manager/books.service';
import { AccountsService } from '../../../shared/services/manager/accounts.service';

@Component({
  selector: 'review-table',
  standalone: true,
  imports: [CommonModule,BoolPipe,RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  //creating new books should be possible at least here, maybe reviews as well
  //<a [routerLink]="['/newbook']"> || [queryParams]="{para: value}"
  todos$: Observable<any>;
  //relevant for router redirect
  loginname = this.accd.Loginname;
  
  constructor(private readonly bookd:BooksService, private readonly accd:AccountsService) {
    this.todos$ = bookd.sendGetAllTodos();
  }

  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewedBook } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookManagementService } from '../../shared/services/book-management.service';
import { HermesService } from '../../shared/services/backend/hermes.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './review-table.component.html',
  styleUrl: './review-table.component.scss'
})
export class ReviewTableComponent implements OnInit {

  reads$:Observable<ReviewedBook[]>;

  //I need a booklist service or ngrx/store
  //Links to Short Essay, maybe with a comment section
  //links to authors, dates, and other extra info
  //possibility to add books to the list with all the
  //neccessary info filled out. a first created date is
  //created and fieds for future date updates will be summoned
  
  //todo: later a backend with the needed info
  //todo: backend has endpoints for every read and the SmallBook info list.
  //frontend pieces together all info. loading every review/read when needed.
  //e.g. select a read from booklist -> show this read and review
  constructor(private readonly hermes:HermesService,private readonly bookService:BookManagementService) {
    this.reads$ = bookService.Reviews;
  }

  ngOnInit(): void {
    console.log('[ReviewTable] This is the page you are looking for');
    this.hermes.getReviewedBooks().subscribe(console.log);
    this.hermes.getTodoBooks().subscribe(console.log)
  }
  //i will work in reads. that means, everytime i read a book i can start a new read
  //-> the book will be marked as in progress (currently reading)
  //later i can press a button: finfished
  //then i will be redirected to fill out a review form with the known properties
  //so a review has to be connected to a "read". the read properties can of course be faked.

  //todo: new book form in popout
  //https://jasonwatmore.com/post/2023/01/03/angular-14-modal-popup-dialog-tutorial-with-example
  //https://stackoverflow.com/questions/76621643/angular-open-component-in-new-browser-window


  //todo: i want 'versino control' form my thoughts/essays on the books
  //ranking after reads should be unneccessary with versino control

  //date range of first read will always stay in todo list.
  //review will contain all read date ranges, including todo range as first entry
}

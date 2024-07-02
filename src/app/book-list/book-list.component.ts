import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  //I need a booklist service or ngrx/store
  //Links to Short Essay, maybe with a comment section
  //links to authors, dates, and other extra info
  //possibility to add books to the list with all the
  //neccessary info filled out. a first created date is
  //created and fieds for future date updates will be summoned
  
  //later a backend with the needed info
  constructor() {}

  ngOnInit(): void {

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

}

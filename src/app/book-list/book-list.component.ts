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

  //todo: new book form in popout
  //https://jasonwatmore.com/post/2023/01/03/angular-14-modal-popup-dialog-tutorial-with-example
  //https://stackoverflow.com/questions/76621643/angular-open-component-in-new-browser-window

}

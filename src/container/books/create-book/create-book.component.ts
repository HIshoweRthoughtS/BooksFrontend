import { Component, OnInit } from '@angular/core';
import { NewBookFormComponent } from '../../../components/books/new-book-form/new-book-form.component';
import { BooksService } from '../../../shared/services/manager/books.service';
import { Book } from '../../../shared/interfaces';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [NewBookFormComponent],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent implements OnInit {
  
  constructor(private readonly bookd:BooksService) {}

  ngOnInit(): void {
    
  }

  createBook(b:Book) {
    this.bookd.sendCreateNewBook(b);
  } 

}

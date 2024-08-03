import { Component, OnInit } from '@angular/core';
import { NewBookFormComponent } from '../../../components/books/form/new-book-form/new-book-form.component';
import { BooksService } from '../../../shared/services/manager/books.service';
import { NewAuthorFormComponent } from '../../../components/books/form/new-author-form/new-author-form.component';
import { NewPublisherFormComponent } from '../../../components/books/form/new-publisher-form/new-publisher-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'create-book',
  standalone: true,
  imports: [ReactiveFormsModule, NewBookFormComponent, NewAuthorFormComponent, NewPublisherFormComponent],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent implements OnInit {
  
  public readonly fullBookForm: FormGroup<any>;
  constructor(private readonly bookd:BooksService, private readonly formBuilder:FormBuilder) {
    this.fullBookForm = formBuilder.group({});
  }

  ngOnInit(): void {
    
  }

  createBook() {
    this.fullBookForm.disable();
    this.bookd.sendCreateNewBook(this.fullBookForm.getRawValue()).subscribe(console.log);
    this.fullBookForm.get('cover')?.enable();
  } 

}

import { Component, OnInit } from '@angular/core';
import { NewBookFormComponent } from '../../../components/books/form/new-book-form/new-book-form.component';
import { BooksService } from '../../../shared/services/manager/books.service';
import { NewAuthorFormComponent } from '../../../components/books/form/new-author-form/new-author-form.component';
import { NewPublisherFormComponent } from '../../../components/books/form/new-publisher-form/new-publisher-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBook } from '../../../shared/interfaces';

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
    //todo:[test] try: no form in this comp. use book form. nest auth and pub in book <bookform><authfomr></authfomr><pubfomr></pubform></bookfomr>
  }

  ngOnInit(): void {
    
  }

  createBook() {
    this.fullBookForm.disable();
    const book:FormBook = this.assembleNewBookBody(this.fullBookForm.getRawValue());
    this.bookd.sendCreateNewBook(book).subscribe((res:any) => {
      this.fullBookForm.get('cover')?.reset();
      this.fullBookForm.enable();
    });
  }
  private assembleNewBookBody(formValues:any): FormBook {
    return { ...formValues, ...formValues.cover }
  }

}

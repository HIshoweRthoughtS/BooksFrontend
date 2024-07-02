import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**Future Expensions
 * 
 * Changelog that shows all changes in the books table
 * (state to finished, essays, dates, etc)
 * 
 * eine todo liste an buechern
 * 
 * roles
 * (only i am allowed to review, add books, etc)
 * (friends may add comments and share there own reviews)
 */




export class AppComponent {
  title = 'BookListFrontEnd';
}


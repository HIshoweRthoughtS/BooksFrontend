import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewTableComponent } from './review-table/review-table.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/readlist',
        pathMatch: 'full'
    }
    ,{
        path: 'readlist',
        component: ReviewTableComponent,
        title: 'Bewertung'
    }
    ,{
        path: 'booklist',
        component: BookListComponent,
        title: 'My Book Todos'
    }
    ,{
        path: 'newbook',
        component: NewBookFormComponent,
        title: 'New Book'
    }
    ,{
        path: '**', //pagenotfound 404
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
];

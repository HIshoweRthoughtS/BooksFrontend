import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/readlist',
        pathMatch: 'full'
    }
    ,{
        path: 'readlist',
        component: BookListComponent,
        title: 'Bewertung'
    }
    ,{
        path: 'newbook',
        component: NewBookFormComponent,
        title: 'New Book'
    }
];

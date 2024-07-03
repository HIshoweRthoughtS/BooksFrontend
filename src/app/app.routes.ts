import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewTableComponent } from './review-table/review-table.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    { path: '', redirectTo: '/readlist', pathMatch: 'full' }
    ,{
        path: 'readlist',
        component: ReviewTableComponent,
        title: 'Bewertung'
    }
    ,{ path: 'bewertung', redirectTo: '/readlist', pathMatch: 'full' }
    ,{ path: 'bewertungen', redirectTo: '/readlist', pathMatch: 'full' }
    ,{
        path: 'booklist',
        component: BookListComponent,
        title: 'My Book Todos'
    }
    ,{ path: 'todo', redirectTo: '/booklist', pathMatch: 'full' }
    ,{ path: 'todos', redirectTo: '/booklist', pathMatch: 'full' }
    ,{ path: 'buchliste', redirectTo: '/booklist', pathMatch: 'full' }
    ,{ path: 'buecherliste', redirectTo: '/booklist', pathMatch: 'full' }
    ,{
        path: 'newbook',
        component: NewBookFormComponent,
        title: 'New Book'
    }
    ,{ path: 'new', redirectTo: '/newbook', pathMatch: 'full' }
    ,{ path: 'neu', redirectTo: '/newbook', pathMatch: 'full' }
    ,{ path: 'neuesbuch', redirectTo: '/newbook', pathMatch: 'full' }
    ,{
        path: 'about',
        component: AboutMeComponent,
        title: 'Yours truly'
    }
    ,{ path: 'aboutme', redirectTo: '/about', pathMatch: 'full' }
    ,{ path: 'ueber', redirectTo: '/about', pathMatch: 'full' }
    ,{ path: 'uebermich', redirectTo: '/about', pathMatch: 'full' }
    ,{
        path: '**', //pagenotfound 404
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
];

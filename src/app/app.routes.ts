import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewTableComponent } from './review-table/review-table.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NewReadFormComponent } from './new-read-form/new-read-form.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
   {
        path: 'home',
        component: HomePageComponent,
        title: 'Home sweet Home'
   }  
    ,{ path: '', redirectTo: '/booklist', pathMatch: 'full' }
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
        path: 'readlist',
        component: ReviewTableComponent,
        title: 'Bewertung'
    }
    ,{ path: 'bewertung', redirectTo: '/readlist', pathMatch: 'full' }
    ,{ path: 'bewertungen', redirectTo: '/readlist', pathMatch: 'full' }
    ,{
        path: 'newbook',
        component: NewBookFormComponent,
        title: 'New Book'
    }
    ,{ path: 'new', redirectTo: '/newbook', pathMatch: 'full' }
    ,{ path: 'neu', redirectTo: '/newbook', pathMatch: 'full' }
    ,{ path: 'neuesbuch', redirectTo: '/newbook', pathMatch: 'full' }
    ,{
        path: 'newreview',
        component: NewReadFormComponent,
        title: 'New Review'
    }
    ,{ path: 'newread', redirectTo: '/newreview', pathMatch: 'full' }
    ,{ path: 'neuebewertung', redirectTo: '/newreview', pathMatch: 'full' }
    ,{
        path: 'about',
        component: AboutMeComponent,
        title: 'Yours truly'
    }
    ,{ path: 'aboutme', redirectTo: '/about', pathMatch: 'full' }
    ,{ path: 'ueber', redirectTo: '/about', pathMatch: 'full' }
    ,{ path: 'uebermich', redirectTo: '/about', pathMatch: 'full' }
    ,{
        path: 'account',
        component: CreateAccountComponent,
        title: 'Create Account'
    }
    ,{
        path: '**', //pagenotfound 404
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
];

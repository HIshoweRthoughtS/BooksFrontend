import { Routes } from '@angular/router';
import { NewBookFormComponent } from '../components/books/new-book-form/new-book-form.component';
import { PageNotFoundComponent } from '../components/general/page-not-found/page-not-found.component';
import { ReviewTableComponent } from '../components/books/review-table/review-table.component';
import { AboutMeComponent } from '../container/about-me/about-me.component';
import { HomePageComponent } from '../container/home-page/home-page.component';
import { BookListComponent } from '../components/books/book-list/book-list.component';
import { NewReadFormComponent } from '../components/books/new-read-form/new-read-form.component';
import { CreateAccountComponent } from '../components/general/user/create-account/create-account.component';
import { ProfileMainComponent } from '../container/user/profile/profile-main/profile-main.component';
import { ProfileScaffoldComponent } from '../container/user/profile/_profile/profile-scaffold.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    /**
     * /home/null --> loged in?
     *      yes -> redirect or cool 'easteregg'
     *      no -> login
     * /home/profilename --> loged in?
     *      yes -> show profile
     *      no -> show all public properties for this profile
     */
    {
        path: 'home',
        component: HomePageComponent,
        title: 'Home sweet Home'
    },
    {
        path: 'home/:loginname',
        component: ProfileMainComponent,
        children: [
            //settings, edit, etc
            //maybe review preview todo preview
            { path:'', component: ProfileScaffoldComponent},
            {
                path: 'booklist',
                component: BookListComponent,
                title: 'My Book Todos'
            },
            { path: 'todo', redirectTo: '/booklist', pathMatch: 'full' },
            { path: 'todos', redirectTo: '/booklist', pathMatch: 'full' },
            { path: 'buchliste', redirectTo: '/booklist', pathMatch: 'full' },
            { path: 'buecherliste', redirectTo: '/booklist', pathMatch: 'full' },
            {
                path: 'readlist',
                component: ReviewTableComponent,
                title: 'Bewertung'
            },
            { path: 'bewertung', redirectTo: '/readlist', pathMatch: 'full' },
            { path: 'bewertungen', redirectTo: '/readlist', pathMatch: 'full' },
            { path: 'neuesbuch', redirectTo: '/newbook', pathMatch: 'full' },
            {
                path: 'newreview',
                component: NewReadFormComponent,
                title: 'New Review'
            },
            { path: 'newread', redirectTo: '/newreview', pathMatch: 'full' },
            { path: 'neuebewertung', redirectTo: '/newreview', pathMatch: 'full' }
        ]
    },
    {
        path: 'newbook',
        component: NewBookFormComponent,
        title: 'New Book'
    },
    { path: 'new', redirectTo: '/newbook', pathMatch: 'full' },
    { path: 'neu', redirectTo: '/newbook', pathMatch: 'full' },
    {
        path: 'about',
        component: AboutMeComponent,
        title: 'Yours truly'
    },
    { path: 'aboutme', redirectTo: '/about', pathMatch: 'full' },
    { path: 'ueber', redirectTo: '/about', pathMatch: 'full' },
    { path: 'uebermich', redirectTo: '/about', pathMatch: 'full' },
    {
        path: 'account',
        component: CreateAccountComponent,
        title: 'Create Account'
    },
    {
        path: '**', //pagenotfound 404
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
];

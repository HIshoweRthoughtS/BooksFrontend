import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/general/page-not-found/page-not-found.component';
import { AboutMeComponent } from '../container/about-me/about-me.component';
import { HomePageComponent } from '../container/home-page/home-page.component';
import { NewReadFormComponent } from '../components/books/form/new-read-form/new-read-form.component';
import { CreateAccountComponent } from '../container/create-account/create-account.component';
import { CreateBookComponent } from '../container/books/create-book/create-book.component';
import { AllBooksComponent } from '../container/books/all-books/all-books.component';
import { ProfileScaffoldComponent } from '../container/user/profile-scaffold.component';
import { BooksTodoViewComponent } from '../container/user/books-todo-view/books-todo-view.component';
import { BooksReviewedViewComponent } from '../container/user/books-reviewed-view/books-reviewed-view.component';
import { rausMitDieViecherGuard } from '../shared/guards/raus-mit-die-viecher.guard';
import { authGuard } from '../shared/guards/auth.guard';
import { TodoDetailedComponent } from '../container/user/todo-detailed/todo-detailed.component';
import { environment } from '../environments/environment.development';

export const routes: Routes = [
    /**
     * /home/null --> loged in?
     *      yes -> redirect or cool 'easteregg'
     *      no -> login
     * /home/profilename --> loged in?
     *      yes -> show profile
     *      no -> show all public properties for this profile
     */
    {
        path: '',
        component: HomePageComponent,
        title: 'Home sweet Home ' + environment.testTitle
    },
    {
        path: 'notfound', //pagenotfound 404
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    },
    {
        path: 'books',
        component: AllBooksComponent,
        title: 'All Books',
        canActivate: [rausMitDieViecherGuard]
    },
    { path: 'book', redirectTo: '/books', pathMatch: 'full' },
    { path: 'allbook', redirectTo: '/books', pathMatch: 'full' },
    { path: 'allbooks', redirectTo: '/books', pathMatch: 'full' },
    {
        path: 'createbook',
        component: CreateBookComponent,
        title: 'New Book',
        canActivate: [rausMitDieViecherGuard]
    },
    { path: 'new', redirectTo: '/newbook', pathMatch: 'full' },
    { path: 'neu', redirectTo: '/newbook', pathMatch: 'full' },
    { path: 'createRead', redirectTo: '/:loginname/newreview', pathMatch: 'full' },
    { path: 'createTodo', redirectTo: '/:loginname/newtodo', pathMatch: 'full' },
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
    //has to be penultimate, because otherwise every thing will be parsed as loginname
    {
        path: ':loginname',
        component: ProfileScaffoldComponent,
        canActivate: [rausMitDieViecherGuard],
        canActivateChild: [authGuard],
        children: [
            //settings, edit, etc
            //maybe review preview todo preview
            {
                path: 'todo',
                component: BooksTodoViewComponent,
                title: 'My Book Todos'
            },
            { path:'', redirectTo: 'todo', pathMatch: 'full' },
            { path: 'todos', redirectTo: '/todo', pathMatch: 'full' },
            { path: 'buchliste', redirectTo: '/todo', pathMatch: 'full' },
            { path: 'buecherliste', redirectTo: '/todo', pathMatch: 'full' },
            {
                path: 'todo/:id',
                component: TodoDetailedComponent,
                title: 'Todo'
            },
            {
                path: 'reviewed',
                component: BooksReviewedViewComponent,
                title: 'Bewertung'
            },
            { path: 'bewertung', redirectTo: '/reviewed', pathMatch: 'full' },
            { path: 'bewertungen', redirectTo: '/reviewed', pathMatch: 'full' },
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
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];

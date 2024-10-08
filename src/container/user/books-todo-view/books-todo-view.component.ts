import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoolPipe } from '../../../shared/bool.pipe';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { BooksService } from '../../../shared/services/manager/books.service';
import { AccountsService } from '../../../shared/services/manager/accounts.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResponseCodes } from '../../../shared/enums/response-codes.enumeration';
import { SimpleTodo } from '../../../shared/interfaces';

@Component({
  selector: 'app-books-todo-view',
  standalone: true,
  imports: [CommonModule,BoolPipe,RouterLink,ReactiveFormsModule],
  templateUrl: './books-todo-view.component.html',
  styleUrl: './books-todo-view.component.scss'
})
export class BooksTodoViewComponent implements OnInit {

    //creating new books should be possible at least here, maybe reviews as well
    //<a [routerLink]="['/newbook']"> || [queryParams]="{para: value}"
    todos$?: Observable<SimpleTodo[]>;
    //relevant for router redirect
    loginname = this.accd.Loginname;
    public setPagesForm:FormGroup<any>;
    constructor(
        private readonly bookd:BooksService,
        private readonly accd:AccountsService,
        private readonly fb:FormBuilder
    ) {
        this.setPagesForm = fb.group({
            current_page: [null, Validators.required],
        });
    }

    //todo:[next] pages for each todo. todos indexed in route via position
    //that means, todo/1 is always your 'most important' or priorised todo -- no todo ids in route

    //the idea is, you start the app/page, first thing you see are your todos
    //you can update your progress, by saying what page you are at now.
    //saving either current progress or (and) all differences, to somehow show, how many pages per day were read

    ngOnInit(): void {
        this.todos$ = this.bookd.sendGetAllTodos();
    }

    setPages(t:SimpleTodo) {
        this.setPagesForm.disable();
        this.bookd.sendSetTodoPages(t.re_id_ref, {...this.setPagesForm.getRawValue()}).subscribe((res:any) => {
            if (!!res) {
                this.todos$ = this.bookd.sendGetAllTodos();
                this.setPagesForm.reset();
                this.setPagesForm.enable();
            }
        });
    }

    finishTodo(t:SimpleTodo) {
        this.todos$ = this.bookd.sendDeleteTodo(t.re_id_ref).pipe(map((res:SimpleTodo[]) => res || this.todos$));
    }

    // atLeastOneValue(form: any) {
    //     return Object.values(form.value).reduce((prev:boolean,val:any) => prev || val, false) ? 
    //         null : 
    //         { atLeastOneRequired : 'At least one should be selected' };
    // }
}

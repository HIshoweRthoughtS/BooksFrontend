import { Component, Input, OnInit } from '@angular/core';
import { FullBERead, SimpleTodo } from '../../../shared/interfaces';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewQuoteComponent } from '../../../components/books/form/new-quote/new-quote.component';
import { NewReviewComponent } from '../../../components/books/form/new-review/new-review.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../../shared/services/manager/books.service';
import { map, Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BackendQuote } from '../../../shared/interfaces/quote';

@Component({
  selector: 'app-todo-detailed',
  standalone: true,
  imports: [CommonModule, NewQuoteComponent, NewReviewComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './todo-detailed.component.html',
  styleUrl: './todo-detailed.component.scss'
})
export class TodoDetailedComponent implements OnInit {

    addToTodo:FormGroup<any>;

    todo$:Observable<FullBERead> | undefined = undefined;
    quotes$:Observable<BackendQuote[]> | undefined = undefined;

    constructor(private readonly router:Router, private readonly actRoute:ActivatedRoute, private readonly fb:FormBuilder, private readonly bookd:BooksService) {
        this.addToTodo = fb.group({
            bookid: [{value: '', disabled: true}, Validators.required]
        });
        this.addToTodo.setValidators(this.atLeastOneArrayValue);
    }

    ngOnInit(): void {
        this.actRoute.paramMap.subscribe((paramMap:any) => {
            const todoid = paramMap.get('id');
            this.todo$ = this.bookd.sendGetOneTodo(todoid).pipe(tap((todo:FullBERead) => {
                if (!todo) {
                    //todo: broadcast
                    this.router.navigate(['/', 'notfound']);
                }
                else {
                    this.addToTodo.patchValue({bookid:todo.b_b_id_ref});
                }
            }));
        });

        this.actRoute.paramMap.subscribe((paramMap:any) => {
            const todoid = paramMap.get('id');
            this.quotes$ = this.bookd.sendGetQuotes(todoid);
        });
    }

    expandTodo(todo:FullBERead) {
        this.todo$ = this.bookd.sendTodoAddInfo(todo.re_id_ref, this.addToTodo.getRawValue()).pipe(tap((res:FullBERead) => 
            this.quotes$ = this.bookd.sendGetQuotes(res.re_id_ref)
        ));
    }


    private atLeastOneArrayValue(form: any) {
        //if true, at least one child is not empty -> no error
        return Object.values(form.value).reduce((prev:boolean,val:any,idx:number, arr:any[]) => {
            // console.log(arr);
            return prev || 0 !== val.length;
            // return prev || (0 !== idx && 0 !== val.length);
        }, false) ? null : { atLeastOneRequired : 'At least one should be selected' };
    }
}

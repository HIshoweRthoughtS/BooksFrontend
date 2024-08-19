import { Component, Input } from '@angular/core';
import { FullBERead, SimpleTodo } from '../../../shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { NewQuoteComponent } from '../../../components/books/form/new-quote/new-quote.component';
import { NewReviewComponent } from '../../../components/books/form/new-review/new-review.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../../../shared/services/manager/books.service';
import { map, Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detailed',
  standalone: true,
  imports: [CommonModule, NewQuoteComponent, NewReviewComponent, ReactiveFormsModule],
  templateUrl: './todo-detailed.component.html',
  styleUrl: './todo-detailed.component.scss'
})
export class TodoDetailedComponent {

    addToTodo:FormGroup<any>;

    todo$:Observable<any>;

    constructor(private readonly router:Router, private readonly actRoute:ActivatedRoute, private readonly fb:FormBuilder, private readonly bookd:BooksService) {
        this.todo$ = actRoute.paramMap.pipe(map((paramMap:any) => {
            const todoid = paramMap.get('id');
            return bookd.sendGetOneTodo(todoid).pipe(tap((todo:FullBERead) => {
                if (!todo) {
                    //todo: broadcast
                    router.navigate(['/', 'notfound']);
                }
            }));
        }));

        this.addToTodo = fb.group({});
    }

    expandTodo(todo:FullBERead) {
        this.bookd.sendTodoAddInfo(todo.re_id_ref, this.addToTodo.getRawValue());
    }

}

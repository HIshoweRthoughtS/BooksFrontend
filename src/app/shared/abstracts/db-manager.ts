import { Observable } from "rxjs";
import { Book, Read, ReviewedBook, TodoBook } from "../interfaces";

export abstract class DbManager {
    //getters
    abstract get Books(): Observable<Book[]>; //or just Book[] todo:tbd
    abstract get Todos(): Observable<TodoBook[]>; //or just Book[] todo:tbd
    abstract get Reviews(): Observable<ReviewedBook[]>; //or just Book[] todo:tbd

    abstract getOtherBook(isbn:string): Book | undefined;
    abstract getTodoBook(isbn:string): TodoBook | undefined;
    abstract getReviewedBook(isbn:string): ReviewedBook | undefined;

    //setters/adders
    abstract addOther(book:Book): void;
    abstract addTodo(book:TodoBook): void;
    abstract addReviewed(book:ReviewedBook): void;
    abstract addReadToBook(read:Read, book:ReviewedBook): void;

    //finders
    abstract findBook(isbn:string): Book | undefined;
    abstract findOther(isbn:string): Book | undefined;
    // abstract findRead(readId:string): Read | undefined
    // abstract findReviewedBook(readId:string): ReviewedBook | undefined

    abstract reviewContainsAnyBook(book:Book): boolean;
    abstract todoContainsAnyBook(book:Book): boolean;


    //operators
    abstract changeOtherToReview(book:Book, review:ReviewedBook): boolean;
    abstract changeTodoToReview(todo:TodoBook, review:ReviewedBook): boolean;
}

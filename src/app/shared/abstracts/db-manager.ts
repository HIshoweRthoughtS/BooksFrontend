import { Observable } from "rxjs";
import { Book, Read, ReviewedBook, TodoBook } from "../interfaces";

export abstract class DbManager {
    //getters
    abstract get Books(): Observable<Book[]> //or just Book[] todo:tbd
    abstract get Todos(): Observable<TodoBook[]> //or just Book[] todo:tbd
    abstract get Reviews(): Observable<ReviewedBook[]> //or just Book[] todo:tbd

    //setters/adders
    abstract addBook(book:Book): void
    abstract addReadToBook(read:Read, book:ReviewedBook): void

    //finders
    abstract findBook(isbn:string): Book | undefined
    // abstract findRead(readId:string): Read | undefined
    // abstract findReviewedBook(readId:string): ReviewedBook | undefined

    abstract reviewContainsAnyBook(book:Book): boolean
    abstract todoContainsAnyBook(book:Book): boolean
}
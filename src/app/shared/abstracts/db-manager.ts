import { Observable } from "rxjs";
import { Book, Review } from "../interfaces";

export abstract class DbManager {
    //getters
    abstract get Books(): Observable<Book[]> //or just Book[] todo:tbd

    //finders
    abstract findBook(isbn:string): Book | undefined
}
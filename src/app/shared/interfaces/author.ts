import { Book } from "./book";

export interface Author {
    firstname:string,
    lastname:string,
    extranames?:string,
    birthday:Date,
    books?:Book[],
    extra_info?:string
}

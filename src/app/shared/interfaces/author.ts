import { Book } from "./book";

export interface Author {
    firstname:string,
    lastname:string,
    extranames:string | null,
    birthday:Date,
    books:Book[] | null,
    extra_info:string | null
}

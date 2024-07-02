import { Read } from "./read";

export interface Book {
    isbn:string,
    author:string,
    title:string,
    extended_title:string | null,
    publisher:string,
    pages:number,
    more_pages:number | null,
    reads: Read[] | null,
    
    extra_info:string | null,
    thoughts:string | null,
}

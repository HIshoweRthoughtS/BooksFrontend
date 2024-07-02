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
    
    rank:number,
    extra_info:string | null,
    thoughts:string | null,
}


//todo: es soll zwei interfaces geben. eins mit allen infos fuer die 'gelesen' Liste
//und eins mit nur buch infos, fuer eine 'alle buecher'- bzw. 'todo' liste

import { Read } from "./read";
import { Author } from "./author";



//todo: remove double fields. leaving for now, so nothing breaks.
//when changed, change appropriate places in other components
export interface Book {
    isbn:string,
    author:string,
    title:string,
    publisher:string,
    pages:number,

    //extra_authors:Author[]
    extended_title:string | null,
    more_pages:number | null,
    
    extra_info:string | null, //such as, where to buy, awards, etc
    thoughts:string | null,
}

export interface TodoBook extends Book {
    book:Book,
    read:boolean,
    started:Date | null,
    finished:Date | null,
}

export interface ReviewedBook extends Book {
    book:Book,
    readCoutn:number,
    reads: Read[],
    rank:number | null //rank is not per read, cause that would be too much. With version control becomes uneccessary
}

//todo: es soll zwei interfaces geben. eins mit allen infos fuer die 'gelesen' Liste
//und eins mit nur buch infos, fuer eine 'alle buecher'- bzw. 'todo' liste

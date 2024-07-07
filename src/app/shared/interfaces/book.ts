import { Read } from "./read";
import { Author } from "./author";


export const enum BookReadStates {
    exisnt = 'book does not exist in db',
    //should never be in db or view but can be used for stuff
    lost = 'information lost through cast',
    //Book is in other
    exists = 'not interested in reading',
    interesting = 'to be read in the future',
    //Book is in todo
    todo = 'scheduled to be read',
    //start date but no finish
    progress = 'started reading',
    //start and finish but still in todo
    awaiting = 'finished reading; awaiting review',
    //Book is in reviewed
    reviewed = 'read and reviewed at least once'
}


//todo: remove double fields. leaving for now, so nothing breaks.
//when changed, change appropriate places in other components
export interface Book {
    isbn:string,
    author:string,
    title:string,
    publisher:string,
    pages:number,

    //extra_authors:Author[]
    extended_title?:string,
    more_pages?:number,

    read_state:BookReadStates,  //unlisted,todo,progress,awaiting,reviewd
    
    first_read?:string, //von :Date zu :Date
    extra_info?:string, //such as, where to buy, awards, etc
    thoughts?:string,
}

export interface TodoBook extends Book {
    started?:Date,
    finished?:Date,
}
//TodoBooks, that have been read and dont have a review will be penting for review
export interface ReviewedBook extends Book {
    reads: Read[],
    rank:number //rank is not per read, cause that would be too much. With version control becomes uneccessary
}

//todo: es soll zwei interfaces geben. eins mit allen infos fuer die 'gelesen' Liste
//und eins mit nur buch infos, fuer eine 'alle buecher'- bzw. 'todo' liste

import { BackendAuthor, FormAuthor } from "./author";
import { BackendPublisher, FormPublisher } from "./publisher";
import { Read } from "./read";

const enum BookReadStates {
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

export interface FormBook {
    isbn:string,
    title:string,
    extended_title?:string,
    author:FormAuthor,
    seconds?:FormAuthor[],
    publisher:FormPublisher,

    chapter?:number,
    pages?:number,
}

export interface BE_Book_A_Name_P_Title {
    id_ref:number,
    isbn:string,
    title:string,
    /*author*/
    a_first:string,
    a_last:string,
    /*publisher*/
    p_title:string,
    
    extended_title?:string,
    extra_info?:string,
}

export interface BackendBook {
    id_ref:number,
    isbn:string,
    author: BackendAuthor,
    publisher: BackendPublisher,
    
    title:string,
    extended_title?:string,
    extra_info?:string,
}

interface TodoReminder {
    title:string,
    content:string,
}

interface TodoBook extends BackendBook {
    order_rank: number,
    started_todo_date: string, //Date
    finished_todo_date?: string, //Date
    reminder?: TodoReminder[],
}

interface ReviewedBook extends BackendBook {
    created_at:string, //Date
    first_impression:string,
    last_updated: string, //Date
    reads: Read[],
    order_rank?: number,
}

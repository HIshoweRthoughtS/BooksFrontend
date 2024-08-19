import { BackendAuthor, FormAuthor } from "./author";
import { BackendPublisher, FormPublisher } from "./publisher";
import { FormRead } from "./read";

//Everything in Use right now -> all exported and internals for usage
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
export interface SimpleBook {
    b_id_ref:number,
    isbn:string,
    title:string,
    /*author*/
    a_first:string,
    a_last:string,
    /*publisher*/
    p_title:string,

    pages:number | null,
    chapter:number | null,
    
    extended_title:string | null,
    extra_info:string | null,
}
export interface TwoBee_Todo_Book {
    bookId: string,
    start_date: string | null, //ISO DATE
}
export interface SimpleTodo extends SimpleBook {
    re_id_ref: string,
    order_rank: number,
    started_todo_date: string | null,
    finished_todo_date: string | null,
    last_page: number | null,
    current_page: number | null,
    // "join_acc": 1,
    // "join_book": 1,
    // "join_author": 1,
    // "join_publisher": 1,
}
//Everything I want or how I imagine changes

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
interface BackendBook {
    b_id_ref:number,
    isbn:string,
    author: BackendAuthor,
    publisher: BackendPublisher,
    
    title:string,
    extended_title?:string,
    extra_info?:string,
}
interface TodoBook extends BackendBook {
    order_rank: number,
    started_todo_date: string, //Date
    finished_todo_date?: string, //Date
    reminder?: TodoReminder[],
}
interface TodoReminder {
    title:string,
    content:string,
}
interface ReviewedBook extends BackendBook {
    created_at:string, //Date
    first_impression:string,
    last_updated: string, //Date
    reads: FormRead[],
    order_rank?: number,
}

import { FormAuthor } from "./author";
import { FormPublisher } from "./publisher";

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

export interface BackendBook {
    id_ref:number,
    isbn:string,
    /*author*/
    first_name:string,
    last_name:string,
    /*publisher*/
    pub_title:string,
    
    title:string,
    extended_title?:string,
    extra_info?:string,
}

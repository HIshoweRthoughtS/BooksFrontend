import { Review } from "./review";

export const Grades:{[key:string]:string} = {
    "vb": "Very Best",
    "ra": "Read Again",
    "gr": "Good Read",
    "nm": "Nice Message",
    "e": "Enjoyed",
    "pg": "Partially Good",
    "nr": "Not Recommended",
    "dnf": "Did Not Finish",
}

//dates are mandatory, but do not have to be accurate
export interface FormRead {
    // id:string, //isbn + start/finish-date/count
    book_id_ref:string,
    started_read_date: string, //iso date
    finished_read_date: string, //iso date
    reviews: Review[],
    quicknote: string,
    thoughts?: string,

    remove_todo_id?: number,
}

//todo:create frontend and backend interfaces
//> what you get from db/rest and what you display and get with user interact

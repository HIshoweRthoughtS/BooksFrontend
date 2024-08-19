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

//dates are mandatory,but do not have to be accurat: stringe
export interface FormRead {
    // id:string, //isbn + start/finish-date/count
    b_id_ref:string,
    started_read_date: string, //iso date
    finished_read_date: string, //iso date
    reviews: Review[],
    quicknote: string,
    thoughts?: string,

    remove_todo_id?: number,
}

export interface FullBERead {
    a_a_id_ref:string,
    re_id_ref: string,
    started_read_date: string,
    current_page: number,
    finished_read_date: string,
    thoughts: string,
    quicknote: number,
    rv_rv_id_ref: string,
    rv_created_at: string,
    rv_first_impression: string,
    rv_order_rank: number,
    rv_last_updated: string,
    b_b_id_ref: string,
    b_isbn: string,
    b_title: string,
    b_extended_title: string,
    b_pages: number,
    b_chapter: number,
    b_extra_info: string,
    au_au_id_ref: string,
    au_first_name: string,
    au_last_name: string,
    au_more_legal_names: string,
    au_pseudonym: string,
    au_birthday: string,
    pub_pub_id_ref: string,
    pub_title: string,
    pub_country_of_origin: string,
    pub_hq_locatio: string,
}

//todo:create frontend and backend interfaces
//> what you get from db/rest and what you display and get with user interact

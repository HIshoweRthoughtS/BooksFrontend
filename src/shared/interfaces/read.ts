
//A Read must contain at least a quicknote and can contain an essay and review.

import { Review } from "./review";

//dates are mandatory, but do not have to be accurate
export interface Read {
    // id:string, //isbn + start/finish-date/count
    reviews: Review[],
    started_read_date: string, //Date
    finished_read_date: string, //Date
    thoughts: string,
}

//todo:create frontend and backend interfaces
//> what you get from db/rest and what you display and get with user interact

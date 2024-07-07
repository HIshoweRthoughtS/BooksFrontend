import { Review } from './review'

export const Grades:{[key:number]:{short:string, long:string}} = {
    1: {short: "vb", long: "Very Best"},
    2: {short: "ra", long: "Read Again"},
    3: {short: "gr", long: "Good Read"},
    4: {short: "nm", long: "Nice Message"},
    5: {short: "e", long: "Enjoyed"},
    6: {short: "pg", long: "Partially Good"},
    7: {short: "nr", long: "Not Recommended"},
    9: {short: "dnf", long: "Did Not Finish"},
}

//A Read must contain at least a quicknote and can contain an essay and review.
//dates are mandatory, but do not have to be accurate
export interface Read {
    id:string, //isbn + start/finish-date/count
    startDate:string, //is Date asap
    finishDate:string, //is Date asap
    quicknote:string, //todo: is Grades...short
    review?:Review,
    short_essay?:string,
}

//todo:create frontend and backend interfaces
//> what you get from db/rest and what you display and get with user interact

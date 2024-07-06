import { Review } from './review'

export enum Grades {
    vb = "Very Best",
    ra = "Read Again",
    gr = "Good Read",
    nm = "Nice Message",
    e = "Enjoyed",
    pg = "Partially Good",
    nr = "Not Recommended",
    dnf = "Did Not Finish",
}

export interface Read {
    id:string, //isbn + start/finish-date/count
    startDate:string, //is Date asap
    finishDate:string, //is Date asap
    quicknote:string, //todo: is Grades | null asap //aka grade
    review:Review | null,
    short_essay:string | null,
}
import { Review } from './review'

enum Grades {
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
    startDate:string, //is Date asap
    finishDate:string | null, //is Date asap
    quicknote:string, //is Grades | null asap //aka grade
    review:Review | null,
    short_essay:string | null,
}
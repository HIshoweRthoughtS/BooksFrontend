import { Review } from './review'

enum Grades {
    vb = "Very Best",
    ra = "readagain",
    gr = "goodread",
    nm = "nicemessage",
    e = "enjoyed",
    pg = "partially good",
    nr = "not recommended",
    dnf = "did not finish",
}

export interface Read {
    startDate:Date,
    finishDate:Date,
    review:Review,
    quicknote:Grades, //aka grade
}
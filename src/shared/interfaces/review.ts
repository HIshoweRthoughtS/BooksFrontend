
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
export interface Review {
    created_at:string, //Date
    is_public: boolean,
    rating: number, //Stars from 0 to 5
    quicknote: number,
    title:string,
    essay:string,
    last_edited:string, //Date
    tldr?:string, 
}

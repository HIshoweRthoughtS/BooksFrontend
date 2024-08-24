
//not in use
const enum ColorCodes {
    yellow = 1,
    green,
    orange,
    blue,
    purple,
    pink
}

export const Colors:string[] = ['yellow','green','orange','blue','purple','pink'];

export interface BackendQuote {
    q_id_ref:string,
    content:string,
    note:string,
    chapter:number,
    page_from:number,
    page_to:number,
    line_from:number,
    line_to:number,
    created_at:string,
    is_public:boolean,
    join_read:number,
    join_book:number
}

export interface Quote {
    content: string,
    note: string,
    chapter: string,
    page_from: number,
    page_to:number,
    line_from:number,
    line_to:number,
    is_public:boolean,
    markers:string[]
}

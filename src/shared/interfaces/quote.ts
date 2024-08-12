
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

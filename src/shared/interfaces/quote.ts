
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

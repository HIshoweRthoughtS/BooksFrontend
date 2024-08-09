
export interface Review {
    created_at:string, //Date
    is_public: boolean,
    rating: number, //Stars from 0 to 5
    title:string,
    essay:string,
    last_edited:string, //Date
    tldr?:string, 
}


export interface FormAuthor {
    first_name:string,
    last_name:string,
    pseudonym?:string,
    birthday?:Date
}

export interface BackendAuthor {
    au_id_ref:number,
    first_name:string,
    last_name:string,
    more_legal_names?:string,
    pseudonym?:string,
    birthday?:Date
}

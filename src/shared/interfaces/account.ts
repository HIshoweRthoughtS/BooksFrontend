
export interface Credentials {
    loginname:string,
    password:string
}

export interface Account extends Credentials {
    email?:string,
    last_login?:Date,
    last_logout?:Date,
    created_at?:Date
}


export interface Credentials {
    loginname:string,
    password:string
}

export interface FormAccount extends Credentials {
}

export interface BackendAccount {
    email?:string,
    last_login?:Date,
    last_logout?:Date,
    created_at?:Date

}

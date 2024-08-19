import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SimpleBook, FormAccount, TwoBee_Todo_Book, FormRead, Review, FullBERead } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';
import { environment } from '../../../environments/environment.development';
import { BroadcastService } from '../broadcast/broadcast.service';
import { Quote } from '../../interfaces/quote';

interface ServerRes<T> {
    info: ResponseCodes,
    data: T | ServerError
}

//export for broadcast service
export interface ServerError {
    summary: string,
    message: string,
    //more soon
}

@Injectable({
    providedIn: 'root'
})
export class HermesService {

    constructor(private readonly http:HttpClient, private readonly bbc:BroadcastService) { }

    //devonly
    public deltedB() {
        this.get(this.BACKEND_BASE_URL + '/dev/deletedb').subscribe(console.log);
    }
    
    //login
    //login/
    public postLoginAccount(body:any): Observable<FormAccount> {
        return this.post<FormAccount>(this.ACCOUNT_LOGIN_PATH, body);
    }
    //login/new
    public postNewAccount(body:FormAccount): Observable<any> {
        return this.post<any>(this.NEW_LOGIN_PATH, body);
    }

    //account
    //account/
    public getAccountLoginState() {
        return this.get<{loginname:string}>(this.ACCOUNT_PATH);
    }
    //account/logout
    public getLogout(): Observable<string> {
        return this.get<string>(this.ACCOUNT_LOGOUT_PATH);
    }

    //general
    //general/books/
    public getAllBooks(sorting?:string): Observable<SimpleBook[]> {
        return this.get<SimpleBook[]>(this.ALL_BOOOKS_PATH)/* + `/?srt=${sorting}`*/;
    }
    public postNewBook(body:any): Observable<string> {
        return this.post<string>(this.ALL_BOOOKS_PATH, body);
    }
    //general/books/:bookId
    public patchBookLength(bookId:string, detail:{last_page:number, last_chapter?:number},) {
        return this.patch<any>(this.replaplaceBookId(this.BOOK_RESSOURCE_PATH, bookId), detail);
    }

    //:userId
    //:userId/books/todo
    public getTodoBooks(accId:string): Observable<any> {
        return this.get<any>(this.replaceUserId(this.USER_TODOS_PATH, accId));
    }
    public postTodoBooks(accId:string, body:TwoBee_Todo_Book): Observable<any> {
        return this.post<string>(this.replaceUserId(this.USER_TODOS_PATH, accId), body);
    }
    //:userId/books/todo/:todoId
    public getOneTodo(accId:string, todoId: string): Observable<FullBERead> {
        return this.get<FullBERead>(this.replaceTodoId(this.replaceUserId(this.TODOS_RESSOURCE_PATH, accId), todoId));
    }
    public postTodoAddInfo(accId:string, todoId:string, body:{quotes:Quote[],reviews:Review[]}): Observable<string> {
        return this.post(this.replaceTodoId(this.replaceUserId(this.TODOS_RESSOURCE_PATH, accId), todoId), body);
    }
    public patchTodoPages(accId:string, todoId:string, body:{current_page:number}): Observable<any> {
        return this.patch<string>(this.replaceTodoId(this.replaceUserId(this.TODOS_RESSOURCE_PATH, accId), todoId), body);
    }
    //:userId/books/reads
    public getReviewedBooks(accId:string): Observable<any> {
        return this.get<any>(this.replaceUserId(this.USER_READS_PATH, accId));
    }
    public postRead(accId:string, body:FormRead) {
        return this.post<string>(this.replaceUserId(this.USER_READS_PATH, accId), body);
    }

    private replaceUserId(url:string, accId:string) {
        return this.replaceParams(url, ':userid', accId);
    }
    private replaplaceBookId(url:string, bookId:string) {
        return this.replaceParams(url, ':bookid', bookId);
    }
    private replaceTodoId(url: string, todoId:string) {
        return this.replaceParams(url, ':todoId', todoId);
    }
    private replaceParams(url:string, wildcard:string, replacement:string): string {
        return url.replace(wildcard, replacement);
    }
    //==========generic http methods======================
    private get<T>(uri:string, options?:any): Observable<T> {
        // return this.sendNoBody<T>(this.http.get<ServerRes<T>>, uri, options);
        return this.http.get<ServerRes<T>>(uri, options).pipe(
            tap((res:any) => this.loggerFirstDraft(uri,res)),
            map((res:ServerRes<T>) => {
                let ret = null;
                if (ResponseCodes.fail === res.info) {
                    this.bbc.backEndRequestFailed(res.data as ServerError);
                }
                else {
                    ret = res.data;
                }
                return ret as T;
            })
        );
    }
    private post<T>(uri:string, body?:any, options?:any): Observable<T> {
        return this.http.post<ServerRes<T>>(uri, body, options).pipe(
            tap((res:any) => this.loggerFirstDraft(uri,res)),
            map((res:ServerRes<T>) => {
                let ret = null;
                if (ResponseCodes.fail === res.info) {
                    this.bbc.backEndRequestFailed(res.data as ServerError);
                }
                else {
                    ret = res.data;
                }
                return ret as T;
            })
        );//.pipe(catchError(this.errorHandler).bind(this))
    }
    private patch<T>(uri:string, body?:any, options?:any): Observable<T> {
        return this.http.patch<ServerRes<T>>(uri, body, options).pipe(
            tap((res:any) => this.loggerFirstDraft(uri,res)),
            map((res:ServerRes<T>) => {
                let ret = null;
                if (ResponseCodes.fail === res.info) {
                    this.bbc.backEndRequestFailed(res.data as ServerError);
                }
                else {
                    ret = res.data;
                }
                return ret as T;
            })
        );//.pipe(catchError(this.errorHandler).bind(this))
    }

    //todo:[opt] get this to work
    private sendNoBody<T>(funcReturnObsevable:{(pUri:string, pOptions?:any):Observable<ServerRes<T>>}, uri:string, options?:any): Observable<T> {
        return funcReturnObsevable(uri, options).pipe(
            tap((res:ServerRes<T>) => this.loggerFirstDraft(uri,res)),
            map((res:ServerRes<T>) => {
                let ret = null;
                if (ResponseCodes.fail === res.info) {
                    this.bbc.backEndRequestFailed(res.data as ServerError);
                }
                else {
                    ret = res.data;
                }
                return ret as T;
            })
        );
    }
    private sendWithBody<T>(funcReturnObsevable:{(uri:string, body?:any, options?:any):Observable<any>},uri:string, body?:any, options?:any): Observable<any> {
        return funcReturnObsevable(uri, body, options).pipe(
            tap((res:ServerRes<T>) => this.loggerFirstDraft(uri,res)),
            map((res:ServerRes<T>) => {
                let ret = null;
                if (ResponseCodes.fail === res.info) {
                    this.bbc.backEndRequestFailed(res.data as ServerError);
                }
                else {
                    ret = res.data;
                }
                return ret as T;
            })
        );
    }


    private loggerFirstDraft(uri:string, res:any): void {
        console.info(`Response from ${uri} is ${res.info}\nRes detail:`, res.data);
    }


    //links, but part of the class
    private readonly BACKEND_BASE_URL:string = environment.backendURL;

    private readonly ACCOUNT_LOGIN_PATH:string = this.BACKEND_BASE_URL + '/login';
    private readonly NEW_LOGIN_PATH:string = this.ACCOUNT_LOGIN_PATH + '/new';

    private readonly ACCOUNT_PATH:string = this.BACKEND_BASE_URL + '/account';
    private readonly ACCOUNT_LOGOUT_PATH:string = this.ACCOUNT_PATH + '/logout';

    private readonly DEV:string = this.BACKEND_BASE_URL + '/dev';

    private readonly GENERAL_ROUTE:string = this.BACKEND_BASE_URL + '/general';
    private readonly ALL_BOOOKS_PATH: string = this.GENERAL_ROUTE + '/books';
    private readonly BOOK_RESSOURCE_PATH: string = this.ALL_BOOOKS_PATH + '/:bookid';
    
    private readonly USER_ASSOCIATED_ROUTE:string = this.BACKEND_BASE_URL + '/:userid';
    private readonly USER_TODOS_PATH: string = this.USER_ASSOCIATED_ROUTE + '/books/todos';
    private readonly TODOS_RESSOURCE_PATH: string = this.USER_TODOS_PATH + '/:todoId';
    private readonly USER_READS_PATH: string = this.USER_ASSOCIATED_ROUTE + '/books/reads';
}

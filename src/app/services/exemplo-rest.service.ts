import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { exemploRest } from "./../model/exemplo-rest";
 
 @Injectable()
 export class ExemploRestService {
 
     private _postsURL = "https://jsonplaceholder.typicode.com/posts";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<exemploRest[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <exemploRest[]>response.json();
             })
             .catch(this.handleError);
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }
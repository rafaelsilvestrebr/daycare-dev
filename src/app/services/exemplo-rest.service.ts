import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

// tslint:disable-next-line:import-blacklist
import {Observable} from 'rxjs/Rx';

// OBs
// É necessário adicionar no app.module o HttpModule, FormsModule e o nosso servido rest

@Injectable()
export class ExemploRestService {

  constructor( private http: Http) { }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(result => result.json());
  }

  GetPostAsPerID(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).map(result => result.json());
  }

  sendSchoolData(){
    // url exemplo: https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(food);
    //return this.http.post('/api/food/', body, options ).map((res: Response) => res.json());
  }

}

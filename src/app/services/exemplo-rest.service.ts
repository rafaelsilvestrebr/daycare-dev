import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//OBs
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

}

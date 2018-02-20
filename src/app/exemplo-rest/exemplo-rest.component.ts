import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from '../services/exemplo-rest.service';
import { exemploRest } from "./../model/exemplo-rest";

@Component({
  selector: 'app-exemplo-rest',
  templateUrl: './exemplo-rest.component.html',
  styleUrls: ['./exemplo-rest.component.css']
})
export class ExemploRestComponent implements OnInit {

  name: string;

  _postsArray: exemploRest[];

  constructor(private exemploRestService: ExemploRestService) {
    this.name = 'Angular Service';
  }

  getPosts(): void {
    this.exemploRestService.getPosts()
      .subscribe(
        resultArray => this._postsArray = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  ngOnInit(): void {
      this.getPosts();
  }
  
}

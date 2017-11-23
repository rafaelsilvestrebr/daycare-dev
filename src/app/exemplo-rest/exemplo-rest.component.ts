import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from '../services/exemplo-rest.service';

@Component({
  selector: 'app-exemplo-rest',
  templateUrl: './exemplo-rest.component.html',
  styleUrls: ['./exemplo-rest.component.css']
})
export class ExemploRestComponent implements OnInit {

  name: string;
  data: any;
  PostId: string;
  SinglePost: any;

  constructor(private exemploRestService: ExemploRestService) {
    this.name = 'Angular Service';

    // escrevendo no log todo json recebido
    this.exemploRestService.getPost().subscribe(posts => { console.log(posts); });

    this.exemploRestService.getPost().subscribe(posts => { this.data = posts; } );

    this.SinglePost = {
      id: '',
      UserID: '',
      title: '',
      body: ''
    };
  }

  GetPost() {
    this.exemploRestService.GetPostAsPerID(this.PostId).subscribe(post => { this.SinglePost = post; } );
  }

  ngOnInit() {
  }

}

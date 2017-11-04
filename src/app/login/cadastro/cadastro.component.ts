import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  title: string;

  constructor(private loginService: LoginService) { }


  ngOnInit() {
    this.title = this.loginService.someMethod();
  }

}

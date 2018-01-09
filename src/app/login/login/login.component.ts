import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from './../../services/exemplo-rest.service';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private exemploRestService: ExemploRestService, private loginService: LoginService) { 
    
  }

  ngOnInit() {
    this.exemploRestService.getPost();
    this.loginService.insert();
  }
  
  
}

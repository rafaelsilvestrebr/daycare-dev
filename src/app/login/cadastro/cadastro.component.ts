import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login.service';

import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private loginService: LoginService, public fb: FormBuilder) { }

  public loginForm = new FormGroup({
    email: new FormControl("email", Validators.required),
    password: new FormControl("password", Validators.required)
  });

  doLogin(event) {

    // Show the value of the form
    let formData = this.loginForm.value;
    console.log(formData);

    // Or, grab the value of one control:
    let email = this.loginForm.controls.email.value;
    console.log(email);

    

    
    

    console.log(event);
  }

  title: string;

  


  ngOnInit() {
    this.title = this.loginService.someMethod();
  }

}
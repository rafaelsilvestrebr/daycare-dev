import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login.service';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  /////////////////// Form cadastro
  registerUserForm: FormGroup;
  post: any;
  email: string = '';
  password: string = '';

  titleAlert: string = 'This field is required';

  constructor(private loginService: LoginService, public fb: FormBuilder) { 

    this.registerUserForm = fb.group({
      'nome' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password' : [null,  Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])]
    });

  }

  addRegister(post) {
    this.email = post.description;
    this.password = post.password;

    let formData = this.registerUserForm.value;
    console.log(formData);

    // Or, grab the value of one control:
    let nomeVal = this.registerUserForm.controls.nome.value;
    let emailVal = this.registerUserForm.controls.email.value;
    let passwordVal = this.registerUserForm.controls.password.value;
    console.log('Nome = ' + nomeVal);
    console.log('E-mail = ' + emailVal);
    console.log('Password = ' + passwordVal);
    console.log(event);
  }
  
  
  
  
  
  
  
  
  
  
  /*public loginForm = new FormGroup({
    email: new FormControl('email', Validators.required),
    password: new FormControl('password', Validators.required)
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
  */

  
  

}
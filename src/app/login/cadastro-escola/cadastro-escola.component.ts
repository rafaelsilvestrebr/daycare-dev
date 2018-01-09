import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-cadastro-escola',
  templateUrl: './cadastro-escola.component.html',
  styleUrls: ['./cadastro-escola.component.css']
})
export class CadastroEscolaComponent implements OnInit {

  formSchool: FormGroup;
  post: any;

  teste: any = false;

  constructor(public fb: FormBuilder, loginService: LoginService) {

    this.formSchool = fb.group({
      // tslint:disable-next-line:max-line-length
      'perfil' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password' : [null,  Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'nomeEscola' : [null, Validators.required],
      'cep' : [null, Validators.required],
      'endereco' : [null, Validators.required],
      'telefone' : [null, Validators.compose([Validators.required, Validators.pattern (/^\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}$/)])],
      'number' : [null, Validators.compose([Validators.required, Validators.pattern (/^[0-9]*$/)])]
    });


  }

  ngOnInit() {
    // ###### exemplo usar jquery
    /*You could cast it to <any> or extend the jquery typing to add your own method.

    (<any>$("div.printArea")).printArea();
    //Or add your own custom methods (Assuming this is added by yourself as a part of custom plugin)

    interface JQuery {
      
      printArea():void;
    }*/
    
    // Exemplo document.ready
    /*(function( $ ) {
      $(function() {
        (<any>$('#txttelefone')).mask('(00) 0000-00009');
      });
    })(jQuery);*/
        

      //console.log((<any>$('body')).html());
  }

  clicked() {
    console.log('teste2');
    this.teste = true;
  }

  addSchool() {
    //this.email = post.description;
    //this.password = post.password;

    let formData = this.formSchool.value;
    console.log(formData);
    // tslint:disable-next-line:no-unused-expression
    // Or, grab the value of one control:
    //let nomeVal = this.registerUserForm.controls.nome.value;
    //let emailVal = this.registerUserForm.controls.email.value;
    //let passwordVal = this.registerUserForm.controls.password.value;
    //console.log('Nome = ' + nomeVal);
    //console.log('E-mail = ' + emailVal);
    //console.log('Password = ' + passwordVal);
    //console.log(event);

    // url exemplo post: https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api
  }

}
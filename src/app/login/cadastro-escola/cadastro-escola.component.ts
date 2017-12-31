import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-escola',
  templateUrl: './cadastro-escola.component.html',
  styleUrls: ['./cadastro-escola.component.css']
})
export class CadastroEscolaComponent implements OnInit {

  formSchool: FormGroup;
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  telefone: string = '';

  teste: any = false;

  constructor(public fb: FormBuilder) {
    this.formSchool = fb.group({
      // tslint:disable-next-line:max-line-length
      'email' : [null, Validators.compose([Validators.required, Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password' : [null,  Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
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

}
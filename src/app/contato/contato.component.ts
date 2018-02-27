import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import {MaterializeAction} from 'angular2-materialize';

//POST
import { Response, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ContatoService } from "./../services/contato.service";

import { Contato } from "./../model/contato";



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato: FormGroup;
  post: any;
  contato: Contato;

  value:string;

  errorMessage: string;

  constructor(public fb: FormBuilder, private contatoService: ContatoService) {

    this.contato  = {nome: 'abc' , email: 'abc', telefone: 'abc', celular: 'abc', departamento: 'abc', mensagem: 'abc', data: 'abc', timestamp: 'abc'};


    this.formContato = fb.group({
      // tslint:disable-next-line:max-line-length
      'email' : [null, Validators.compose([Validators.required, Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'firstName' : [null, Validators.required],
      'ECliente' : [null, Validators.required],
      'departamento' : [null, Validators.required],
      'telefone' : [null, Validators.compose([Validators.required, Validators.pattern (/^\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}$/)])],
      'celular' : [null, Validators.compose([Validators.required, Validators.pattern (/^\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}$/)])]
    });




  }

  ngOnInit() {
    $(document).ready(function() {
      (<any>$('select')).material_select();
    });

    // POST
    this.contatoService
        .createService('http://localhost:5000/gravaContato', this.contato)
        .subscribe(
            result => console.log(result),
            error => this.errorMessage = <any>error
        );

  }


  enviarContato(value) {
    const formData = this.formContato.value;
    console.log(formData);

    
  }

  


/* will return
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/

}

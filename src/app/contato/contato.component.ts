import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato: FormGroup;
  post: any;

  constructor(public fb: FormBuilder) {

    this.formContato = fb.group({
      // tslint:disable-next-line:max-line-length
      'email' : [null, Validators.compose([Validators.required, Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'firstName' : [null, Validators.required],
      'departamento' : [null, Validators.required],
      'telefone' : [null, Validators.compose([Validators.required, Validators.pattern (/^\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}$/)])]
    });


  }

  ngOnInit() {
    $(document).ready(function() {
      (<any>$('select')).material_select();
    });
  }


  enviarContato() {
    const formData = this.formContato.value;
    console.log(formData);
  }

}

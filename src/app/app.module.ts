import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroEscolaComponent } from './login/cadastro-escola/cadastro-escola.component';

// {{servico}}
import { ExemploRestService } from './services/exemplo-rest.service';
import { LoginService } from './services/login.service';

// {{webservice rest}} https://offering.solutions/blog/articles/2016/02/01/consuming-a-rest-api-with-angular-http-service-in-typescript/
import { HttpClientModule } from '@angular/common/http';
import { ExemploRestComponent } from './exemplo-rest/exemplo-rest.component';

// Materialize
import { MaterializeModule } from 'angular2-materialize';

// para funcionar jquery $, instalar (npm install @types/jquery --save) e importar
import * as $ from 'jquery';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    CadastroEscolaComponent,
    ExemploRestComponent,
    LandingPageComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [ExemploRestService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

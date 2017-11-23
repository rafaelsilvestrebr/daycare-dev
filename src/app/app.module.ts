import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

// {{servico}}
import { LoginService } from './login/login.service';
import { ExemploRestService } from './services/exemplo-rest.service';

// {{webservice rest}} https://offering.solutions/blog/articles/2016/02/01/consuming-a-rest-api-with-angular-http-service-in-typescript/
import { HttpClientModule } from '@angular/common/http';
import { ExemploRestComponent } from './exemplo-rest/exemplo-rest.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ExemploRestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    HttpClientModule
  ],
  providers: [LoginService, ExemploRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

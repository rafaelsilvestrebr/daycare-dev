import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CadastroEscolaComponent } from './cadastro-escola/cadastro-escola.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CadastroEscolaComponent]
})
export class LoginModule { }

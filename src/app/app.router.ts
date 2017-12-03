import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroEscolaComponent } from './login/cadastro-escola/cadastro-escola.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro-escola', component: CadastroEscolaComponent},
    { path: 'cadastro', component: CadastroComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
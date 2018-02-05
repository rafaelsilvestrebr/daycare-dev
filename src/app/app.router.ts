import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroEscolaComponent } from './login/cadastro-escola/cadastro-escola.component';
import { ExemploRestComponent } from './exemplo-rest/exemplo-rest.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContatoComponent } from './contato/contato.component';


export const router: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full'},
    { path: 'landing-page', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro-escola', component: CadastroEscolaComponent},
    { path: 'exemplo-rest', component: ExemploRestComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'cadastro', component: CadastroComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
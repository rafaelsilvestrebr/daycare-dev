import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';


export const router: Routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full'},
    { path: 'cadastro', component: CadastroComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
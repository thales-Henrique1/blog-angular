import { Routes } from '@angular/router';
import{ ConteudoComponent } from './pages/conteudo/conteudo.component'
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path:'ConteudoComponent/:Id',
        component: ConteudoComponent
    }
];

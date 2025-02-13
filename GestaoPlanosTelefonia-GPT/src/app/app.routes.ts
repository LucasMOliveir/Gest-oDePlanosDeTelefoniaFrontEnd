import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanosComponent } from './components/planos/planos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PlanosDeClientesComponent } from './components/planos-de-clientes/planos-de-clientes.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "Clientes",
        component: ClientesComponent
    },
    {
        path: "Planos",
        component: PlanosComponent
    },
    {
        path: "Planos de clientes",
        component: PlanosDeClientesComponent
    },
];
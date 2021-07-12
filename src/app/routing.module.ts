import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';

const prueba = localStorage.getItem('prueba');
console.log(prueba);


const routes: Routes = [
  {
    path: '',
    component: HomePrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => prueba===null?import('./account/account.module').then(m => m.AccountModule):import('./account/account.module').then(m => document.location.href='/platform')
  },
  {
    path: 'platform',
    loadChildren: () => prueba!==null?import('./platform/platform.module').then(m => m.PlatformModule):import('./platform/platform.module').then(m => document.location.href='/account')
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

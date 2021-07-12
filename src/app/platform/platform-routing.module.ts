import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScalesComponent } from './pages/scales/scales.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'scales',
        component: ScalesComponent
      },
      {
        path: '**',
        redirectTo: 'scales'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlatformRoutingModule { }

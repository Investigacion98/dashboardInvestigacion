import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstitutionsComponent } from './pages/institutions/institutions/institutions.component';
import { UpdateInstitutionComponent } from './pages/institutions/update-institution/update-institution.component';
import { ScalesCreateComponent } from './pages/scales-create/scales-create.component';
import { ScalesEditComponent } from './pages/scales-edit/scales-edit.component';
import { ScalesResultsComponent } from './pages/scales-results/scales-results.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'scales/create',
        component: ScalesCreateComponent
      },
      {
        path: 'scales/edit',
        component: ScalesEditComponent
      },
      {
        path: 'scales/results',
        component: ScalesResultsComponent
      },
      {
        path: 'institutions/create',
        component: InstitutionsComponent
      },
      {
        path: 'institutions/update',
        component: UpdateInstitutionComponent
      },
      {
        path: '**',
        redirectTo: 'scales/create'
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

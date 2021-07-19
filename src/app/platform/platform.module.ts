import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuSideComponent } from './pages/menu-side/menu-side.component';
import { ScalesCreateComponent } from './pages/scales-create/scales-create.component';
import { ScalesEditComponent } from './pages/scales-edit/scales-edit.component';
import { ScalesResultsComponent } from './pages/scales-results/scales-results.component';
import { PreguntaComponent } from './pages/pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    InstitutionsComponent,
    ToolbarComponent,
    MenuSideComponent,
    ScalesCreateComponent,
    ScalesEditComponent,
    ScalesResultsComponent,
    PreguntaComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    PlatformRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class PlatformModule { }

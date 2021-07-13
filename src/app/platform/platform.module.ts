import { NgModule } from '@angular/core';
import { ScalesComponent } from './pages/scales/scales.component';
import { HomeComponent } from './pages/home/home.component';
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuSideComponent } from './pages/menu-side/menu-side.component';
import { ScalesCreateComponent } from './pages/scales-create/scales-create.component';



@NgModule({
  declarations: [
    ScalesComponent,
    HomeComponent,
    InstitutionsComponent,
    ToolbarComponent,
    MenuSideComponent,
    ScalesCreateComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    PlatformRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class PlatformModule { }

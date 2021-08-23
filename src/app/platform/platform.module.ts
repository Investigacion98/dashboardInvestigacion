import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
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
import { FiltroComponent } from './pages/filtro/filtro.component';
import { ResultStudentComponent } from './pages/result-student/result-student.component';
import { ExcelComponent } from './pages/excel/excel.component';
import { InstitutionsModule } from './pages/institutions/institutions.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    MenuSideComponent,
    ScalesCreateComponent,
    ScalesEditComponent,
    ScalesResultsComponent,
    PreguntaComponent,
    FiltroComponent,
    ResultStudentComponent,
    ExcelComponent,
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    PlatformRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    InstitutionsModule,
    UsersModule
  ]
})
export class PlatformModule { }

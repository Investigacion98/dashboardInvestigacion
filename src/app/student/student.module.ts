import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScalesComponent } from './pages/scales/scales.component';
import { StudentRoutingModule } from './student-routing.module';
import { AnswerComponent } from './pages/answer/answer.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    ScalesComponent,
    AnswerComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule
  ]
})
export class StudentModule { }

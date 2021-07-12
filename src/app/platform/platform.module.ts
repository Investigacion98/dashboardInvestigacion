import { NgModule } from '@angular/core';
import { ScalesComponent } from './pages/scales/scales.component';
import { HomeComponent } from './pages/home/home.component';
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { PlatformRoutingModule } from './platform-routing.module';



@NgModule({
  declarations: [
    ScalesComponent,
    HomeComponent,
    InstitutionsComponent
  ],
  imports: [
    PlatformRoutingModule
  ]
})
export class PlatformModule { }

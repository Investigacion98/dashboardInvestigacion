import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  exports: [
    MatIconModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

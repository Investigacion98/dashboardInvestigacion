import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }

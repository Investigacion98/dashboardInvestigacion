import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    RegisterModule
  ]
})
export class AccountModule { }

import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    AccountRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AccountModule { }

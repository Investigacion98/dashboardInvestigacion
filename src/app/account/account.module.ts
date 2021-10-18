import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoginComponent } from './pages/login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from './pages/register/register.module';
import { RegisterService } from './pages/services/register.service';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ConfirmationComponent,
  ],
  imports: [
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    RegisterModule,
    CommonModule
  ],
  providers: [RegisterService]
})
export class AccountModule { }

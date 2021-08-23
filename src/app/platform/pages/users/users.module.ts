import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UsersRoutingModule } from './users-routing.module';
import { ChangeRoleComponent } from './change-role/change-role.component';



@NgModule({
  declarations: [
    AuthorizationComponent,
    ChangeRoleComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

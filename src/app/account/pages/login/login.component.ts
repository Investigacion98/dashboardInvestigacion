import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  emailError:string = 'notification-none';
  // emailError:string = 'notification';
  passwordError:string = 'notification-none';
  // passwordError:string = 'notification';
  typePassword:string = 'password';
  
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  sendData() {
    const newUser = {'email':this.email,'password':this.password};
    this.loginService.postUser(newUser)
      .subscribe((res:any) => {
        console.log(res);
        
        localStorage.setItem('auth',res.auth);
        localStorage.setItem('admissibleness',res.admissibleness);
        localStorage.setItem('name',res.name);
        this.router.navigate(['/platform/scales']);
      })
  }

  changeTypePassword() {
    if(this.typePassword==='password'){
      this.typePassword = 'text';
    }else{
      this.typePassword = 'password';
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {

  activate:boolean = true;
  constructor(private router:Router) { 
    this.router.events.subscribe((val: NavigationEnd)=>{
      if (this.router.url.split('/').length>3) {
        this.activate = false;
      }else{
        this.activate = true;
      }
    })
  }

  ngOnInit(): void {
  }
}

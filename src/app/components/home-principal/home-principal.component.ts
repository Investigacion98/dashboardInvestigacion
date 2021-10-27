import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.css']
})
export class HomePrincipalComponent implements OnInit {

  active = 'aplicacion';
  constructor() { }

  ngOnInit(): void {
  }

  change(opt) {
    switch(opt){
      case 'aplicacion':
        this.active = "aplicacion";
        break;
      case 'escalas':
        this.active = "escalas";
        break;
      case 'historia':
        this.active = "historia";
        break;
    }
  }

}

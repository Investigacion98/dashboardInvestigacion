import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent implements OnInit {

  activateResponsive:boolean = false;

  itemsScales = [
    {
      'link': '/scales/create',
      'title': 'Crear',
      'icon': 'add_circle' 
    },
    {
      'link': '/scales/edit',
      'title': 'Editar',
      'icon': 'edit' 
    },
    {
      'link': '/scales/results',
      'title': 'Resultados',
      'icon': 'search' 
    }
  ];
  itemsInstitutions = [
    {
      'link': '/institutions/create',
      'title': 'Añadir',
      'icon': 'add_circle' 
    },
    {
      'link': '/institutions/update',
      'title': 'Actualizar',
      'icon': 'update' 
    }
  ];
  itemsApproved = [];

  constructor(private router:Router) {
    
    this.router.events.subscribe((val: NavigationEnd)=>{
      const asdf = val.url+"";
      this.change(asdf[10]);
    })
  }

  ngOnInit(): void {
    if (this.router.url.split('/')[2]==="scales") {
      this.change("s");
    }else if(this.router.url.split('/')[2]==="institutions"){
      this.change("i");
    }
  }
  
  change(path){
    const admissibleness = localStorage.getItem('admissibleness');
    this.activateResponsive = false;
    if (admissibleness==="6465asd7#asd-1") {
      if (path==='s') {
        this.itemsApproved = this.itemsScales;
        
      }else if(path==='i'){
        this.itemsApproved = this.itemsInstitutions;
      }
      
    }
  }
  
  activateMenuResponsive() {
    if (this.activateResponsive===true) {
      this.activateResponsive = false;
    }else{
      this.activateResponsive = true;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent implements OnInit {

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
      'link': '/scales/create',
      'title': 'Añadir',
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
  itemsApproved = [];

  constructor(private router:Router) {
    
    this.router.events.subscribe((val: NavigationEnd)=>{
      const asdf = val.url+"";
      this.change(asdf[10]);
    })
  }

  ngOnInit(): void {
    this.change("s");
  }
  
  change(path){
    const admissibleness = localStorage.getItem('admissibleness');
    if (admissibleness==="6465asd7#asd-1") {
      
      if (path==='s') {
        this.itemsApproved = this.itemsScales;
        
      }else if(path==='i'){
        this.itemsApproved = this.itemsInstitutions;
      }
      
    }
  }
  
}

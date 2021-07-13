import { Component, OnInit } from '@angular/core';

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
  itemsApproved = [];

  constructor() { }

  ngOnInit(): void {
    const admissibleness = localStorage.getItem('admissibleness');
    if (admissibleness==="6465asd7#asd-1") {
      if (document.location.pathname==='/platform/scales') {
        this.itemsApproved = this.itemsScales;
        
      }
      console.log(document.location.pathname);
      
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  activate:boolean = false;
  activateSpecific:boolean = false;
  optionSelected:number;
  options:any[] = [];

  buttons = [];

  buttonsFilter:any[] = [
    {
      'name': 'Instituciones',
      'options': ''
    },
    {
      'name': 'Grados',
      'options': ''
    },
    {
      'name': 'Edad',
      'options': ''
    },
    {
      'name': 'Sexo',
      'options': [{'name':'Masculino','checked':false},{'name':'Femenino','checked':false}]
    },
    {
      'name': 'Tipo de colegio',
      'options': [{'name':'Pública','checked':false},{'name':'Privada','checked':false}]
    },
    {
      'name': 'Sector',
      'options': [{'name':'Zona rural','checked':false},{'name':'Zona urbana','checked':false}]
    },
    {
      'name': 'Escalas',
      'options': ''
    },
    {
      'name': 'Rangos',
      'options': ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('filterElements')!==null){
      this.buttons = JSON.parse(localStorage.getItem('filterElements'));
    }
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttonsFilter.splice(this.getIndex(this.buttons[i].name),1);
    }
  }

  getIndex(name){
    for (let i = 0; i < this.buttonsFilter.length; i++) {
      if (name===this.buttonsFilter[i].name) {
        return i;
      }
    }
  }

  actionSelect() {
    this.activate = true;
  }

  clickButtons(index) {
    this.activate = false;
    this.activateSpecific = true;
    this.options = this.buttons[index].options;
  }

  delete(index) {
    this.buttonsFilter.push(this.buttons[index]);
    this.buttons.splice(index,1);
    localStorage.setItem('filterElements',JSON.stringify(this.buttons));
  }

  close(){
    this.activate = false;
    this.activateSpecific = false;
  }

  add() {
    if (this.buttonsFilter[this.optionSelected]!==undefined) {
      this.activate = false;
      this.activateSpecific = true;
      this.buttons.push(this.buttonsFilter[this.optionSelected]);
      this.options = this.buttons[this.buttons.length-1].options;
      this.buttonsFilter.splice(this.optionSelected,1);
    }
  }

  check() {
    this.activateSpecific = false;
    localStorage.setItem('filterElements',JSON.stringify(this.buttons));
  }
}

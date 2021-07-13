import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  name:string = "";

  constructor() { }

  ngOnInit(): void {
    const nameVar = localStorage.getItem("name");
    if(nameVar){
      this.name = "¡Hola "+nameVar+"!";
    }
  }

}

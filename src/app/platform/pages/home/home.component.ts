import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  updateText = "Escalas";

  constructor() { }

  ngOnInit(): void {
  }

  update(e){
    this.updateText = e; 
  }
}

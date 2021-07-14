import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  tabs = [
    {
      'link': '/scales/create',
      'title': 'Escalas',
      'icon': 'assessment'
    },
    {
      'link': '/institutions/add',
      'title': 'Instituciones',
      'icon': 'store'
    }
  ]
  generatetabs = [];

  constructor() { }

  ngOnInit(): void {
    const admissibleness = localStorage.getItem("admissibleness");
    if (admissibleness==='6465asd7#asd-1') {
      this.generatetabs = this.tabs;
    }
  }
}

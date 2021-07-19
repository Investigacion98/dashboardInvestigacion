import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input('pruebaIn') pruebaIn:any;

  @Output() jsonSend = new EventEmitter();

  textQuestion = '';
  typeOfQuestion= '';

  constructor() { }

  ngOnInit(): void {
    this.textQuestion = this.pruebaIn.question.textQuestion;
    this.typeOfQuestion = this.pruebaIn.question.typeOfQuestion;
  }

  send(){
    const i = this.pruebaIn.index;
    const json = {
      'textQuestion': this.textQuestion,
      'typeOfQuestion': this.typeOfQuestion 
    };
    this.jsonSend.emit({'index':i,'question':json});
  }

}

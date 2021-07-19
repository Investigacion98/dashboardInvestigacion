import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-scales-create',
  templateUrl: './scales-create.component.html',
  styleUrls: ['./scales-create.component.css']
})
export class ScalesCreateComponent implements OnInit {

  title: string = '';
  description: string = '';
  answerForm:string = '';
  questions:any = [];

  constructor(private platformServices:PlatformService) { }

  ngOnInit(): void {
  }

  addQuestion() {
    this.questions.push({
      'textQuestion': '',
      'typeOfQuestion': '' 
    })
  }

  responseQuestionComponent(e){
    const i = parseInt(e.index);
    this.questions[i] = e.question;
  }

  clearAll() {
    this.title = '';
    this.description = '';
    this.answerForm = '';
    this.questions = [];
  }

  sendScale() {
    const sendJson = {
      'title': this.title,
      'description': this.description,
      'answerForm': this.answerForm,
      'questions': this.questions
    }
    this.platformServices.sendScale(sendJson)
      .subscribe(res => {
        if (res.info==='¡¡¡ Creación exitosa !!!') {
          console.log("se guardo");
          //condición si se guardo bien
          // this.clearAll();
        }
      },err=>{
        console.log(err);
        if (err.status===500) {
          const errorMessage = err.error.error.message;
          if(errorMessage==="invalid token"){
            console.log("Usuario incorrecto");
            //se debe guardar la escala en localstorage, borrar los datos de sesión y redirigir a login
          }
        }else if(err.status===401){
          console.log("Usuario sin credenciales");
          //redirigin a login
        }
      })    
  }
}

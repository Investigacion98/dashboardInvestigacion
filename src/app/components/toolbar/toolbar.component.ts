import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  name:string = "";
  investigadores = [
    {
      color: `border-color: rgba(${Math.floor((Math.random() * (255 - 1 + 1)) + 1)},
                                  ${Math.floor((Math.random() * (255 - 1 + 1)) + 1)},
                                  ${Math.floor((Math.random() * (150 - 1 + 1)) + 1)},.5);`,
      image: 'assets/images/lina.png',
      name: 'Lina Maria Obando Guerrero',
      title: 'Psicóloga, Universidad de Nariño',
      profile: 'Magister en Psicodiagnóstico y Evaluación Psicológica, Universidad de Buenos Aires. Especialista en Psicología Forense y Criminal en curso, Universidad Konrad Lorenz. Miembro del Grupo de Investigación “Libres Pensadores” Categoria B de Colciencias.',
      moreInfo: false
    },
    {
      color: `border-color: rgba(${Math.floor((Math.random() * (255 - 1 + 1)) + 1)},
                                  ${Math.floor((Math.random() * (255 - 1 + 1)) + 1)},
                                  ${Math.floor((Math.random() * (150 - 1 + 1)) + 1)},.5);`,
      image: 'assets/images/5187699.jpg',
      name: 'Nombre Completos Número Segundo',
      title: 'Psicólogo',
      profile: 'Otro',
      moreInfo: false
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
    const nameVar = localStorage.getItem("name").split(" ")[0];
    if(nameVar){
      this.name = "¡Hola "+nameVar+"!";
    }
  }

  redirect() {
    document.location.href = './account/login';
  }
}

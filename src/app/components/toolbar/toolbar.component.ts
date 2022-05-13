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
      image: 'assets/images/jhonatan.jpeg',
      name: 'Jonnathan Harvey Narváez',
      title: 'Psicólogo, Universidad de Nariño',
      profile: 'Licenciado en Filosofía, Pensamiento Político y Económico Universidad Santo Tomás. Especialista en Estudios Latinoamericanos,. Magister en Investigación Integrativa, Doctor en Ciencias de la Educación. Director Grupo de Investigación Libres Pensadores Departamento de Psicología Universidad de Nariño. Investigador Asociado Colciencias.',
      moreInfo: false
    },
  ]

  itemsMenu = [
    {
      title: 'Medición y evaluación',
      link: '',
      subMenu: [
        {
          title: 'Adaptación y validación de instrumentos',
          link: ''
        },
        {
          title: 'Elaboración de diagnósticos',
          link: ''
        },
        {
          title: 'Caracterización de contextos educativos',
          link: ''
        }
      ]
    },
    {
      title: 'Intervención psicoeducativa',
      link: '',
      subMenu: [
        {
          title: 'Convivencia y paz',
          link: ''
        },
        {
          title: 'Cognición y desarrollo multidimensional',
          link: ''
        },
        {
          title: 'Violencia, Escuela y contexto',
          link: ''
        }
      ]
    },
    {
      title: 'Investigación',
      link: '',
      subMenu: [
        {
          title: 'Asesorías en investigación',
          link: ''
        },
        {
          title: 'Asesorías en investigación',
          link: ''
        },
        {
          title: 'Diseño y ejecución de proyectos de investigación',
          link: ''
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    try {
      var nameVar = localStorage.getItem("name").split(" ")[0];
    } catch (error) {
      
    }
    if(nameVar){
      this.name = "¡Hola "+nameVar+"!";
    }
  }

  public redirect() {
    document.location.href = './account/login';
  }

  public navigate() {

  }
}

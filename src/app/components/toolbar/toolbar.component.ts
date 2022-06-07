import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  affairFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
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

  carrusel = [
    {
      image: 'assets/images/1car.jpg',
      title: '¿Qué son las escalas?',
      content: 'Las escalas corresponden a  un conjunto de ítems que buscan describir determinadas características de variables que no son observables directamente (Lamprea y Gómez, 2007). Estas están divididas en factores los cuales reflejan le realidad que se va a medir (Sánchez y Echeverry, 2004).'
    },
    {
      image: 'assets/images/2car.jpg',
      title: 'Escala de Exposición a Factores de Deprivación Sociocultural',
      content: 'La Escala de Exposición a Factores de Deprivación Sociocultural- EXFADESO evalúa el grado de exposición de un individuo a los factores de deprivación sociocultural. Esta constituida por 25 ítems que se encuentran distribuidos en seis factores, correspondientes a dinámica familiar, clima familiar, exposición a la violencia comunitaria, apoyo social comunitario, mediación del aprendizaje y clima escolar. La escala es de tipo Likert y las opciones de respuesta son totalmente en desacuerdo, desacuerdo, de acuerdo y totalmente de acuerdo. Su tiempo de duración es de aproximadamente 20 minutos.'
    },
    {
      image: 'assets/images/3car.jpg',
      title: 'Escala De Estrés Percibido',
      content: 'La escala de estrés percibido- EEP adaptada y validada en Colombia evalúa el grado de estrés que perciben los sujetos en contexto de pandemia. Esta constituida por 14 ítems que se encuentran distribuidos en dos factores, correspondientes a percepción del estrés y afrontamiento de los estresores. La escala es de tipo Likert y las opciones de respuesta son nunca, casi nunca, de vez en cuando, casi siempre y siempre. Su tiempo de duración es de aproximadamente 10 minutos.'
    },
    {
      image: 'assets/images/4car.jpg',
      title: 'Escala De Estrés Percibido',
      content: 'La escala de estrés percibido- EEP adaptada y validada en Colombia evalúa el grado de estrés que perciben los sujetos en contexto de pandemia. Esta constituida por 14 ítems que se encuentran distribuidos en dos factores, correspondientes a percepción del estrés y afrontamiento de los estresores. La escala es de tipo Likert y las opciones de respuesta son nunca, casi nunca, de vez en cuando, casi siempre y siempre. Su tiempo de duración es de aproximadamente 10 minutos.'
    },
  ]

  constructor(config: NgbCarouselConfig, private http: HttpClient) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

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

  public sendMessage() {
    if(this.emailFormControl.valid && this.affairFormControl.valid && this.messageFormControl.valid) {
      const json = {
        email: this.emailFormControl.value,
        affair: this.affairFormControl.value,
        message: this.messageFormControl.value
      }
      this.http.post<any>(`${environment.baseURL}/platform/internalMessage`,json)
      .subscribe(res=>{
        Swal.fire(
          'Genial',
          'Mensaje enviado !!!',
          'success'
        )
        this.emailFormControl.reset('');
        this.affairFormControl.reset('');
        this.messageFormControl.reset('');
      })
    }else{
      Swal.fire(
        'Error',
        'Verifique su información e intente nuevamente',
        'error'
      )
    }
  }
}

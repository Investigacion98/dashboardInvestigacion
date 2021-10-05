import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  institutionReq;
  institutions = [];
  courses = [];
  hide = true;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  institution = new FormControl('', [
    Validators.required
  ]);
  selectedAge = new FormControl('', [
    Validators.required
  ]);
  selectedSex = new FormControl('', [
    Validators.required
  ]);
  selectedCourse = new FormControl('', [
    Validators.required
  ]);
  selectedSector = new FormControl('', [
    Validators.required
  ]);
  pass1 = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(15)
  ]);
  pass2 = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(15)
  ]);
  file = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  ages = [
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: '11'},
    {value: '12', viewValue: '12'},
    {value: '13', viewValue: '13'},
    {value: '14', viewValue: '14'},
    {value: '15', viewValue: '15'},
    {value: '16', viewValue: '16'},
    {value: '17', viewValue: '17'},
    {value: '18', viewValue: '18'}
  ];
  sex = [
    {value: 'Femenino', viewValue: 'Femenino'},
    {value: 'Masculino', viewValue: 'Masculino'}
  ];
  residences = [
    {value: 'Zona rural', viewValue: 'Zona rural'},
    {value: 'Zona urbana', viewValue: 'Zona urbana'}
  ];

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerService.getInstitutions()
    .subscribe(res=>{
      this.institutionReq = res.institutions;
      for (let i = 0; i < res.institutions.length; i++) {
        this.institutions.push({
          value: res.institutions[i].code,
          viewValue: res.institutions[i].name
        })
      }
    })
  }

  institutionCourses(){
    this.courses = [];
    var institutionWithCode = this.institutionReq.filter(inst=>inst.code===this.institution.value);
    institutionWithCode[0].courses = institutionWithCode[0].courses.sort(function(a, b){return parseInt(a.split('-')[0])-parseInt(b.split('-')[0])});
    
    for (let i = 0; i < institutionWithCode[0].courses.length; i++) {
      this.courses.push({
        value: institutionWithCode[0].courses[i],
        viewValue: institutionWithCode[0].courses[i]
      })
    }
  }

  send(){
    if (this.name.status==='VALID' && this.selectedAge.status==='VALID' && this.selectedSex.status==='VALID'
    && this.selectedCourse.status==='VALID' && this.selectedSector.status==='VALID'
    && this.institution.status==='VALID' && this.emailFormControl.status==='VALID') {
      if (this.file.status==='VALID') {
        if (this.pass1.value===this.pass2.value && this.pass1.value!=='' && this.pass2.value!=='') {
          const json = {
            name: this.name.value,
            age: this.selectedAge.value,
            sex: this.selectedSex.value,
            course: this.selectedCourse.value,
            residenceSector: this.selectedSector.value,
            institution: this.institution.value,
            email: this.emailFormControl.value,
            password: this.pass2.value,
            file: this.file.value
          }
          console.log(json);
          console.log(this.file.value);
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'Las contrañas no coinciden',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Seleccione una imagen con el permiso diligenciado',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Verifique que haya seleccionado y llenado todos los espacios',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }
}

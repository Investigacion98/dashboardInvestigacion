import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-individual-results',
  templateUrl: './individual-results.component.html',
  styleUrls: ['./individual-results.component.css']
})
export class IndividualResultsComponent implements OnInit {

  termino:string = '';
  options = [];
  optionsInitial = [];
  heroeSeleccionado!: string | undefined;
  dataStudentFlag:boolean = false;
  scales = [];
  data = [];
  types = [];

  constructor(private platformService:PlatformService) { }

  ngOnInit(): void {
    this.platformService.getNameStudents()
      .subscribe(res=>{
        for (let i = 0; i < res.users.length; i++) {
          this.optionsInitial.push(res.users[i].name||TitleCasePipe);
        }
        this.options = this.optionsInitial;
      })
  }
  
  buscando(){
    if(this.termino===''){
      this.options = this.optionsInitial;
    }else{
      this.options = this.filterItems(this.termino);
    }
  }

  filterItems(query) {
    return this.options.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

  search(event:MatAutocompleteSelectedEvent) {
    const student = event.option.value;
    if(student!==undefined){
      this.data = [];
      this.scales = [];
      this.types = [];
      this.dataStudentFlag = false;
      this.platformService.getDataStudent({nameStudent:student})
        .subscribe(res=>{
          this.data.push({
            name: res.name,
            age: res.age,
            course: res.course,
            email: res.email,
            sex: res.sex,
            institution: res.institution,
            type: res.type,
            residenceSector: res.residenceSector,
            resultsCodeScale: res.resultsCodeScale,
            resultsOverallResult: res.resultsOverallResult,
            resultsPhases: res.resultsPhases,
            resultsScale: res.resultsScale,
            resultsTitleScale: res.resultsTitleScale,
          })
          for (let i = 0; i < res.codeScale.length; i++) {
            this.scales.push({
              factors: res.factors[i],
              questions: res.questions[i],
              answerForm: res.answerForm[i],
              baremosMnIg25: res.baremosMnIg25[i],
              baremosMyIg75: res.baremosMyIg75[i],
              codeScale: res.codeScale[i],
              title: res.title[i],
            })
            
          }
          for (let i = 0; i < res.codeType.length; i++) {
            this.types.push({
              codeType: res.codeType[i],
              value: res.value[i]
            })
          }
          this.dataStudentFlag = true;
        })
    }else{
      this.heroeSeleccionado = undefined;
    }
  }

  delete() {
    this.termino = '';
  }
}

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
  dataStudent = {};
  scales = [];

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
      this.platformService.getDataStudent({nameStudent:student})
        .subscribe(res=>{
          this.dataStudent = res;
          this.dataStudentFlag = true;
          this.scales.push({
            answerForm: 0,
            baremosMnIg25: res.baremosMnIg25,
            baremosMyIg75: res.baremosMyIg75,
            codeScale: res.codeScale,
            title: res.titles,
            factors: res.factors,
            questions: res.questions
          })
          console.log(res);
        })
    }else{
      this.heroeSeleccionado = undefined;
    }
  }

  delete() {
    this.termino = '';
  }
}

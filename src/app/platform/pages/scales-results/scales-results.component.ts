import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-scales-results',
  templateUrl: './scales-results.component.html',
  styleUrls: ['./scales-results.component.css']
})
export class ScalesResultsComponent implements OnInit {

  activateButtons:boolean = false;
  activateGraph:boolean = false;
  activateExcel:boolean = false;
  activateResume:boolean = true;
  loading:boolean = false;
  studentResults:any = [];
  studentsResultsAux:any = [];
  scales:any = [];
  typesOfQUalification:any = [];
  totalAverageScale:number[] = [];
  factorsScales = [];

  constructor(private platformService:PlatformService) { }

  ngOnInit(): void {
    this.platformService.getScalesResults()
      .subscribe(res=>{
        this.scales=res.scaleResults;        
        this.typesOfQUalification=res.typesOfQualification;
        for (let i = 0; i < res.scaleResults.length; i++) {
          this.totalAverageScale.push(0);
        }
        var arrayAux = [];
        for (let i = 0; i < res.scaleResults.length; i++) {
          arrayAux = [];
          for (let j = 0; j < this.scales[i].factors.length; j++) {
            arrayAux.push(0);
          }
          this.factorsScales.push(arrayAux);
        }
      })
  }

  buttonSend() {
    this.activateButtons = false;
    this.activateGraph = false;
    this.activateExcel = false;
    this.activateResume = true;
    this.loading = true;
    var filterElements = JSON.parse(localStorage.getItem("filterElements"));
    if (filterElements===null || filterElements===undefined) {
      filterElements = [];
    }
    this.platformService.getResults(filterElements)
    .subscribe(res=>{
      this.studentResults=res.studentResults;
      this.loading = false;
      var acum1 = 0;
      var cont = 0;
      for (let i = 0; i < this.scales.length; i++) {
        acum1 = 0;
        for (let j = 0; j < res.studentResults.length; j++) {
          for (let k = 0; k < res.studentResults[j].resultsCodeScale.length; k++) {
            if (res.studentResults[j].resultsCodeScale[k]===this.scales[i].codeScale) {
              acum1 = acum1 + parseFloat(res.studentResults[j].resultsOverallResult[k]);
              cont++;
              for (let m = 0; m < res.studentResults[j].resultsPhases[k].length; m++) {
                this.factorsScales[i][m] = this.factorsScales[i][m] + parseFloat(res.studentResults[j].resultsPhases[k][m]);
              }
            }
          }
        }
        if (acum1!==0) {
          this.totalAverageScale[i]=acum1/parseFloat(res.studentResults.length);
        }
        if (cont!==0) {
          for (let n = 0; n < this.factorsScales.length; n++) {
            for (let m = 0; m < this.factorsScales[n].length; m++) {
              this.factorsScales[n][m] = this.factorsScales[n][m]/parseFloat(res.studentResults.length);
            }
          }
        }
      }
    })    
  }
  
  buttonRight(e){
    if(this.activateButtons===false){
      this.activateButtons = true;
    }else {
      this.activateButtons = false;
    }
    return false;
  }

  download() {
    this.studentsResultsAux = this.studentResults;
    this.studentResults = [];
    this.activateExcel = true;
    this.activateButtons = false;
    this.activateGraph = false;
    this.activateResume = false;
  }
  
  graph() {
    this.studentResults = [];
    this.activateGraph = true;
    this.activateExcel = false;
    this.activateButtons = false;
    this.activateResume = false;
  }
}

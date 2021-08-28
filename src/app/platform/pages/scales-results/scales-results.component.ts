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
  totalAverage:number[] = [];

  constructor(private platformService:PlatformService) { }

  ngOnInit(): void {
    this.platformService.getScalesResults()
      .subscribe(res=>{        
        this.scales=res.scaleResults;        
        this.typesOfQUalification=res.typesOfQualification;
        for (let i = 0; i < res.scaleResults.length; i++) {
          this.totalAverage.push(0);
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
      var acum = 0;
      for (let i = 0; i < this.scales.length; i++) {
        acum = 0;
        for (let j = 0; j < res.studentResults.length; j++) {
          for (let k = 0; k < res.studentResults[j].resultsCodeScale.length; k++) {
            if (res.studentResults[j].resultsCodeScale[k]===this.scales[i].codeScale) {
              acum = acum + parseInt(res.studentResults[j].resultsOverallResult[k]);
            }
          }
        }
        if (acum!==0) {
          this.totalAverage[i]=acum/res.studentResults.length;
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

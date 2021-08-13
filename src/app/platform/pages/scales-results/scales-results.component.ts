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
  studentResults:any = [];
  studentsResultsAux:any = [];
  scales:any = [];
  typesOfQUalification:any = [];

  constructor(private platformService:PlatformService) { }

  ngOnInit(): void {
    this.platformService.getScalesResults()
      .subscribe(res=>{
        this.scales=res.scaleResults;
        this.typesOfQUalification=res.typesOfQualification;
      })
  }

  buttonSend() {
    this.activateButtons = false;
    this.activateGraph = false;
    var filterElements = JSON.parse(localStorage.getItem("filterElements"));
    if (filterElements===null || filterElements===undefined) {
      filterElements = [];
    }
    this.platformService.getResults(filterElements)
    .subscribe(res=>{
      this.studentResults=res.studentResults
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
  }

  graph() {
    this.studentResults = [];
    this.activateGraph = true;
    console.log("asdf");
    this.activateButtons = false;
  }
}

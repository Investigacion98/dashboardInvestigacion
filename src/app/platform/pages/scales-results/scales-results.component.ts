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
  activateAverageScaleInstitutions:boolean = false;
  institutionOrScale:boolean = true;
  studentResults:any = [];
  studentsResultsAux:any = [];
  scales:any = [];
  typesOfQUalification:any = [];

  totalAverageScale:number[] = [];
  factorsScales = [];

  nameOfInstitutions = [];
  totalAverageScaleInstitution = [];
  factorsScaleInstitution = [];
  numberOfStudents = [];

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
    var flagInstitutions = false;
    var filterElements = JSON.parse(localStorage.getItem("filterElements"));
    this.nameOfInstitutions = [];
    this.totalAverageScaleInstitution = [];
    this.numberOfStudents = [];
    this.factorsScaleInstitution = [];
    const admissibleness =  localStorage.getItem('admissibleness');
    if(admissibleness==='6465asd7#asd-1' || admissibleness==='8435dpe1+nrs-3'){
      this.activateAverageScaleInstitutions = true;
    }
    
    if (filterElements===null || filterElements===undefined) {
      filterElements = [];
    }
    for (let i = 0; i < this.scales.length; i++) {
      for (let j = 0; j < this.scales[i].factors.length; j++) {
        this.factorsScales[i][j] = 0;
      }
    }
    for (let p = 0; p < filterElements.length; p++) {
      if (filterElements[p].name==="Instituciones" && filterElements[p].options.length>0) {
        for (let q = 0; q < filterElements[p].options.length; q++) {
          if(filterElements[p].options[q].checked===true){
            this.nameOfInstitutions.push(filterElements[p].options[q].name);
          }          
        }
        if(this.nameOfInstitutions.length !== 0){
          flagInstitutions = true;
          this.fillInstitutionsAndFactors(this.nameOfInstitutions);
        }
        break;
      }
    }
    this.platformService.getResults(filterElements)
    .subscribe(res=>{
      this.studentResults=res.studentResults;
      this.loading = false;
      var acum1 = 0.0;
      var cont = 0;
      var obj = {};
      if (!flagInstitutions) {
        for (let index = 0; index < res.studentResults.length; index++) {
          obj[res.studentResults[index].institution[0]]="";
        }
        this.fillInstitutionsAndFactors(Object.keys(obj));
      }
      for (let i = 0; i < this.scales.length; i++) {
        acum1 = 0.0;
        for (let j = 0; j < res.studentResults.length; j++) {
          for (let k = 0; k < res.studentResults[j].resultsCodeScale.length; k++) {
            if (res.studentResults[j].resultsCodeScale[k]===this.scales[i].codeScale) {
              for (let l = 0; l < this.nameOfInstitutions.length; l++) {
                if(res.studentResults[j].institution[0]===this.nameOfInstitutions[l]){
                  this.totalAverageScaleInstitution[l][i] = this.totalAverageScaleInstitution[l][i] + parseFloat(res.studentResults[j].resultsOverallResult[k]);
                  this.numberOfStudents[l]++;
                  for (let p = 0; p < res.studentResults[j].resultsPhases[k].length; p++) {
                    this.factorsScaleInstitution[l][i][p] = this.factorsScaleInstitution[l][i][p] + parseFloat(res.studentResults[j].resultsPhases[k][p]);
                  }
                  break;
                }
              }
              acum1 = acum1 + parseFloat(res.studentResults[j].resultsOverallResult[k]);
              cont++;
              for (let m = 0; m < res.studentResults[j].resultsPhases[k].length; m++) {
                this.factorsScales[i][m] = this.factorsScales[i][m] + parseFloat(res.studentResults[j].resultsPhases[k][m]);
              }
            }
          }
        }
        if (acum1!==0) {
          this.totalAverageScale[i]=acum1/cont;
        }
        if (cont!==0) {
          for (let n = 0; n < this.factorsScales.length; n++) {
            for (let m = 0; m < this.factorsScales[n].length; m++) {
              this.factorsScales[n][m] = this.factorsScales[n][m]/cont;
            }
          }
        }
      }
      for (let index = 0; index < this.nameOfInstitutions.length; index++) {
        for (let j = 0; j < this.scales.length; j++) {
          this.totalAverageScaleInstitution[index][j] = this.totalAverageScaleInstitution[index][j]/this.numberOfStudents[index];
          for (let k = 0; k < this.scales[j].factors.length; k++) {
            this.factorsScaleInstitution[index][j][k] = this.factorsScaleInstitution[index][j][k]/this.numberOfStudents[index];
          }
        }
      }
    })    
  }

  chageViewResults(id) {
    if(id===1 && this.institutionOrScale===false){
      this.institutionOrScale = !this.institutionOrScale;
    }else if(id===2 && this.institutionOrScale===true){
      this.institutionOrScale = !this.institutionOrScale;
    }
  }

  fillInstitutionsAndFactors(institutions){
    this.nameOfInstitutions = institutions;
    var arrayAuxAverageScale = [];
    var arrayAuxScaleInstitution = [];
    var arrayAuxFactor = [];
    for (let index = 0; index < this.nameOfInstitutions.length; index++) {
      arrayAuxAverageScale = [];
      arrayAuxScaleInstitution = [];
      for (let jndex = 0; jndex < this.scales.length; jndex++) {
        arrayAuxAverageScale.push(0);
        arrayAuxFactor = [];
        for (let kndex = 0; kndex < this.scales[jndex].factors.length; kndex++) {
          arrayAuxFactor.push(0);
        }
        arrayAuxScaleInstitution.push(arrayAuxFactor);
      }
      this.factorsScaleInstitution.push(arrayAuxScaleInstitution);
      this.totalAverageScaleInstitution.push(arrayAuxAverageScale);
    }
    this.fillNumberStudents(this.nameOfInstitutions.length);
  }

  fillNumberStudents(size){
    for (let i = 0; i < size; i++) {
      this.numberOfStudents.push(0);
    }
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

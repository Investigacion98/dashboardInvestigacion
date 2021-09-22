import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() studentResults;
  @Input() scales;
  @Input() typesOfQUalification;
  @Input() totalAverageScale;
  @Input() factorsScales;
  @Input() nameOfInstitutions;
  @Input() totalAverageScaleInstitution;
  @Input() factorsScaleInstitution;
  @Input() numberOfStudents;

  scalesNames = [];
  typeOfPresentation: boolean = true;
  admissibleness = '';

  constructor() { }

  ngOnInit(): void {
    this.calcMaxMinDes(this.studentResults,this.numberOfStudents,this.totalAverageScaleInstitution);
    this.admissibleness = localStorage.getItem('admissibleness');
    this.scalesNames = this.scales.map(scale=>{return scale.title});
  }

  returnNewArrayInstitutions(i) {
    return this.factorsScaleInstitution.map(inst=>inst[i])
  }

  chageViewResults(id) {
    if(id===1 && this.typeOfPresentation===false){
      this.typeOfPresentation = !this.typeOfPresentation;
    }else if(id===2 && this.typeOfPresentation===true){
      this.typeOfPresentation = !this.typeOfPresentation;
    }
  }
  verify(vec){
    var acum = 0;
    for (let i = 0; i < vec.length; i++) {
      acum+=vec[i];
    }
    if(acum>0) return true;
    return false;
  }

  calcMaxMinDes(resStu,numStu,aveIns) {
    // console.log(this.scales);
    // console.log(resStu);
    // console.log(numStu);
    console.log(aveIns);  
    var max = 0;
    var min = 101;
    var arrayCalcMaxMinDes = [];
    var acumAuxDesvStan = 0;
    var position = 0;
    
    for (let k = 0; k < this.scales.length; k++) {
      for (let i = 0; i < numStu.length; i++) {
        max = 0;
        min = 101;
        acumAuxDesvStan = 0;
        for (let j = 0; j < numStu[i]; j++) {
          var resultOverall = this.calcAux(this.scales[k].codeScale,position);
          if(resultOverall>max) max=resultOverall;
          if(resultOverall<min) min=resultOverall;
          acumAuxDesvStan+=Math.pow(resultOverall-aveIns[i][k],2);
          console.log(resultOverall+" - "+aveIns[j][k]);
          position++;
        }        
        console.log("sumatoria= "+acumAuxDesvStan);
        
        arrayCalcMaxMinDes.push({
          scale: k,
          max,
          min,
          des: Math.sqrt(acumAuxDesvStan/numStu[i])
        })
      }
      position=0;
    }
    console.log(arrayCalcMaxMinDes);
    
  }

  calcAux(codeScale,position){
    for (let i = 0; i < this.studentResults[position].resultsCodeScale.length; i++) {
      if(this.studentResults[position].resultsCodeScale[i]===codeScale){
        return parseInt(this.studentResults[position].resultsOverallResult[i]);
      }
    }
  }
}

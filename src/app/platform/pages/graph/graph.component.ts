import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

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
    // console.log(acum);
    if(acum>0) return true;
    return false;
  }
}

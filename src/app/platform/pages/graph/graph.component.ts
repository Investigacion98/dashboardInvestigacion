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
  typeOfPresentation: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.scalesNames = this.scales.map(scale=>{return scale.title});
    console.log(this.factorsScaleInstitution[0][0]);
    this.factorsScaleInstitution.map(inst=>console.log(inst[0][0]))
    
  }

  returnNewArray(i) {

    this.factorsScaleInstitution.map(inst=>console.log(inst[0][0]))
  }

}

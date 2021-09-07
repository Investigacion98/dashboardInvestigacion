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

  constructor() { }

  ngOnInit(): void {
    console.log(this.scales);
    
  }

}

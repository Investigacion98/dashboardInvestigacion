import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-student',
  templateUrl: './result-student.component.html',
  styleUrls: ['./result-student.component.css']
})
export class ResultStudentComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}

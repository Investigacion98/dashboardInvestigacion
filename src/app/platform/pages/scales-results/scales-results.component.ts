import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-scales-results',
  templateUrl: './scales-results.component.html',
  styleUrls: ['./scales-results.component.css']
})
export class ScalesResultsComponent implements OnInit {

  studentResults:any = [];

  constructor(private platformService:PlatformService) { }

  ngOnInit(): void {
  }

  buttonSend() {
    var filterElements = JSON.parse(localStorage.getItem("filterElements"));
    if (filterElements===null || filterElements===undefined) {
      filterElements = [];
    }
    this.platformService.getResults(filterElements)
      .subscribe(res=>this.studentResults=res.studentResults)    
  }
}

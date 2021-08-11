import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-scales-edit',
  templateUrl: './scales-edit.component.html',
  styleUrls: ['./scales-edit.component.css']
})
export class ScalesEditComponent implements OnInit {

  listScales: string[] = [];
  scaleSelect: string = '-- Seleccione una escala --';
  scale: any;
  activate: boolean = true;

  constructor(private platformServices: PlatformService, private platformService:PlatformService) { }

  ngOnInit(): void {
    this.platformServices.getScalesEdit()
      .subscribe(res=>{
        this.listScales=res.scales;
      });
  }

  edit() {
    if(this.scaleSelect!=='-- Seleccione una escala --'){
      this.platformServices.getScale(this.scaleSelect)
        .subscribe(res=>{
          console.log(res.scale);
          
          this.scale=res.scale;
          this.activate = false;
        })    
    }
  }

}

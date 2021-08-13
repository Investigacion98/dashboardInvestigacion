import { Component, Input, OnInit } from '@angular/core';
import { utils, write, WorkBook } from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  @Input() data;
  @Input() scales;
  processedData = [];
  // table = [
  //   {
  //     First: 'one',
  //     Second: 'two',
  //     Third: 'three',
  //     Forth: 'four',
  //     Fifth: 'five'
  //   },
  //   {
  //     First: 'un',
  //     Second: 'deux',
  //     Third: 'trois',
  //     Forth: 'quatre',
  //     Fifth: 'cinq'
  //   },
  // ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.scales);
    for (let i = 0; i < this.data.length; i++) {
      var student = {}
      student['nombre']= this.data[i].name;
      student['edad']= this.data[i].age;
      student['institución']= this.data[i].institution[0];
      student['tipoInstitucion']= this.data[i].type[0];
      student['zonaResidencia']= this.data[i].residenceSector;
      for (let m = 0; m < this.data[i].resultsCodeScale.length; m++) {
        var scaleWithCode = this.getIndexScale(this.data[i].resultsCodeScale[m]);
        for (let j = 0; j < this.scales[scaleWithCode].questions.length; j++) {
          student[(j+1)+'.'+this.scales[scaleWithCode].questions[j].textQuestion]=this.data[i].resultsScale[m][j];      
        }
      }
      student['resultadoTotal']= this.data[i].resultsOverallResult[0];
      this.processedData.push(student);
    }
    console.log(this.processedData);
    
  }
  
  getIndexScale(codeScale){
    for (let i = 0; i < this.scales.length; i++) {
      if(codeScale===this.scales[i].codeScale){
        return i;
      }
    }
  }

  generar() {
    const ws_name = 'SomeSheet';
    const wb: WorkBook = { SheetNames: [], Sheets: {} };
    const ws: any = utils.json_to_sheet(this.processedData);
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    const wbout = write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });

    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
      };
      return buf;
    }

    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'exported.xlsx');
  }
}

import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-individual-results',
  templateUrl: './individual-results.component.html',
  styleUrls: ['./individual-results.component.css']
})
export class IndividualResultsComponent implements OnInit {

  termino:string = '';
  options = [];
  optionsInitial = [];
  heroeSeleccionado!: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.optionsInitial = ["asdf","er","ytiu","fda"];
    this.options = this.optionsInitial;
  }
  
  buscando(){
    if(this.termino===''){
      this.options = this.optionsInitial;
    }else{
      this.options = this.filterItems(this.termino);
    }
  }

  filterItems(query) {
    return this.options.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

  search(event:MatAutocompleteSelectedEvent) {
    console.log("Se va a buscar a: "+event.option.value);
    
    const student = event.option.value;
    if(student!==undefined){
      console.log(student);
      
      // this.termino = student;      
      // this.heroesService.getHeroePorId(heroe.id!)
      //   .subscribe(heroe=>this.heroeSeleccionado=heroe) 
    }else{
      this.heroeSeleccionado = undefined;
    }
  }

}

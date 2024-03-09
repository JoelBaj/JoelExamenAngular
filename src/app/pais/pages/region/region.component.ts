import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: []
})
export class RegionComponent {
  
  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;
  
 
  
  constructor(private paisService:PaisService) { }


  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises)
  }


  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;
  
  
    this.paisService.buscarRegion(termino)
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;
  
      },(err)=> {
        this.hayError = true;
        this.paises = []
      }
      );
  }
  sugerencias(termino:string) { 
    this.hayError = false;
   
  }

}

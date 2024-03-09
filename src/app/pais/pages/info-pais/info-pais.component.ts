import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrls: ['./info-pais.component.css']
})
export class InfoPaisComponent implements OnInit {
  
   //pais!: Country  ;
   pais: Country[] = []
   
   constructor(
     private activatedRoute: ActivatedRoute,
     private paisService:PaisService
   ){ 
     
   }
  ngOnInit(): void {
   this.activatedRoute.params
     .pipe(
       switchMap(({ id }) => this.paisService.getInfPais(id)),
       tap(console.log)
     )
     .subscribe(pais => this.pais = pais);
 }
 }
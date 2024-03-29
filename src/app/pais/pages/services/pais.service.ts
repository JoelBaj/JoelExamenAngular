import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }

  
  buscarPais(termino: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/region/${region} `;
    return this.http.get<Country[]>(url);
  }
  buscarSubRegion(region: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/subregion/${region} `;
    return this.http.get<Country[]>(url);
  }

  getInfPais(id: string): Observable<Country> { 
    const url = `${this.apiUrl}/alpha/${id}`;
     return this.http.get<Country>(url);
     
  }

}

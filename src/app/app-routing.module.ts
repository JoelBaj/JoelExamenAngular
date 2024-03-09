import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { SubregionComponent } from './pais/pages/subregion/subregion.component';
import { InfoPaisComponent } from './pais/pages/info-pais/info-pais.component';


const routes: Routes = [

  { path: '', component: PaisComponent },
  { path: 'region', component: RegionComponent },
  { path: 'subregion', component: SubregionComponent },
  { path: 'pais/:id', component: InfoPaisComponent },
  { path: '**', redirectTo:'' }
]

@NgModule({
  declarations: [

  ],
  imports: [
      RouterModule.forRoot(routes),
      
  ],
  exports: [
      RouterModule
      
  ]
}) 
export class AppRoutingModule { }

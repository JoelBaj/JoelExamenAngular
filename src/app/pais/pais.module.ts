import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';

import { SubregionComponent } from './pages/subregion/subregion.component';
import { InfoPaisComponent } from './pages/info-pais/info-pais.component';


@NgModule({
  declarations: [
    PaisComponent,
    RegionComponent,
    TablaComponent,
    InputComponent,
    SubregionComponent,
    InfoPaisComponent
  ],
  exports:[
    PaisComponent,
    RegionComponent,
    TablaComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }

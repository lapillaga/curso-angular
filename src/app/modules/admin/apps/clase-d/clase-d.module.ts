import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaseDRoutingModule } from './clase-d-routing.module';
import { ClaseDComponent } from './clase-d.component';


@NgModule({
  declarations: [
    ClaseDComponent
  ],
  imports: [
    CommonModule,
    ClaseDRoutingModule
  ]
})
export class ClaseDModule { }

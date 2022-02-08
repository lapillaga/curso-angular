import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProductsRoutingModule } from './my-products-routing.module';
import { MyProductsComponent } from './my-products.component';
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  declarations: [
    MyProductsComponent
  ],
  imports: [
    CommonModule,
    MyProductsRoutingModule,
    SharedModule
  ]
})
export class MyProductsModule { }

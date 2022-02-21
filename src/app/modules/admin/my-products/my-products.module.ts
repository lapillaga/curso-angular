import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProductsRoutingModule } from './my-products-routing.module';
import { MyProductsComponent } from './my-products.component';
import { SharedModule } from "../../../shared/shared.module";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { MatRadioModule } from '@angular/material/radio';
import { PublicProductCardComponent } from './public-product-card/public-product-card.component';


@NgModule({
  declarations: [
    MyProductsComponent,
    ProductCardComponent,
    ProductFilterComponent,
    PublicProductCardComponent
  ],
  imports: [
    CommonModule,
    MyProductsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule
  ]
})
export class MyProductsModule { }

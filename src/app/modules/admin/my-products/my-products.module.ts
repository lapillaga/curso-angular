import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProductsRoutingModule } from './my-products-routing.module';
import { MyProductsComponent } from './my-products.component';
import { SharedModule } from "src/app/shared/shared.module";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MovementsComponent } from './movements/movements.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MyProductsComponent,
    ProductCardComponent,
    MovementsComponent
  ],
  imports: [
    CommonModule,
    MyProductsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ]
})
export class MyProductsModule {
}

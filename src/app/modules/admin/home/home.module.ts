import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductFilterComponent } from 'src/app/modules/admin/home/product-filter/product-filter.component';
import { MatRadioModule } from '@angular/material/radio';
import {
  PublicProductCardComponent
} from 'src/app/modules/admin/home/public-product-card/public-product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HomeComponent,
    ProductFilterComponent,
    PublicProductCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {BtnLoadingDirective} from "./directives/btn-loading.directive";
import {FilterArrayPipe} from "./pipes/filter-array.pipe";

const components = [
  CardComponent,
  BtnLoadingDirective,
  FilterArrayPipe
];


@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

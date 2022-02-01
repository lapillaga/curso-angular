import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {BtnLoadingDirective} from "./directives/btn-loading.directive";

const components = [
  CardComponent,
  BtnLoadingDirective
];


@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

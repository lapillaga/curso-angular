import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassicComponent} from './classic.component';
import {HeaderModule} from "../../components/header/header.module";
import {SidebarModule} from "../../components/sidebar/sidebar.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ClassicComponent
  ],
  exports: [
    ClassicComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    RouterModule
  ]
})
export class ClassicModule {
}

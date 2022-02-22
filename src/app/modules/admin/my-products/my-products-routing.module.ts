import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from "./my-products.component";
import { MovementsComponent } from 'src/app/modules/admin/my-products/movements/movements.component';

const routes: Routes = [
  {
    path: '',
    component: MyProductsComponent,
  },
  {
    path: 'movements/:id',
    component: MovementsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProductsRoutingModule { }

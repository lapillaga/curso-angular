import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuardService} from "./core/guard/auth-guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/modules/admin/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'my-products',
        loadChildren: () => import('../app/modules/admin/my-products/my-products.module').then(m => m.MyProductsModule)
      },
      {
        path: 'my-contacts',
        loadChildren: () => import('../app/modules/admin/contacts/contacts.module').then(m => m.ContactsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

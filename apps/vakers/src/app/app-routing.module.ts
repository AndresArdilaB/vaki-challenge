import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/vaki',
        pathMatch: 'full',
      },
      {
        path: 'vaki',
        loadChildren: () => import('./vaki/vaki.module').then(m => m.VakiModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
      }
    ]
  },
  // {
  //   path: 'admin',
  //   canActivate: [AdminGuard],
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

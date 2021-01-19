import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { CartFinishComponent } from './components/cart-finish/cart-finish.component';

const routes: Routes = [
  {
    path: '',
    component: CartContainerComponent
  },
  {
    path: 'finish',
    component: CartFinishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartFinishComponent } from './components/cart-finish/cart-finish.component';


@NgModule({
  declarations: [CartContainerComponent, CartItemComponent, CartFinishComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }

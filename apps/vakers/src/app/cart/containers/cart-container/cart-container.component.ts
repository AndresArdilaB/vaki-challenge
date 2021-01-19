import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartItem } from '../../../core/models/cart.model';
import { completeBuy } from '../../../actions/cart.actions';

@Component({
  selector: 'vaki-challenge-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})

export class CartContainerComponent implements OnInit {

  cartItems$: Observable<CartItem[]>;
  cartTotal: number;
  loading = false;

  constructor(
    private store: Store<{ cart: [] }>,
  ) { }

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select('cart'))

    this.store.pipe(select('cart'))
      .subscribe(items => {
        let total = 0;

        items.forEach((item: CartItem) => {
          total = total + (item.quantity * item.value)
        })

        this.cartTotal = total;
      });
  }

  completeBuy() {
    this.loading = true;
    this.store.dispatch(completeBuy())
  }
}

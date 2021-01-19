import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CartItem } from '../../../core/models/cart.model';

@Component({
  selector: 'vaki-challenge-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent implements OnInit {

  cartTotal: number;

  constructor(
    private store: Store<{ cart: [] }>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select('cart'))
      .subscribe((cart: CartItem[]) => {
        let total = 0

        cart.forEach(c => {
          total = total + c.quantity;
        })

        this.cartTotal = total;
      })
  }

}

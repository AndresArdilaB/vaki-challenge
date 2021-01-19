import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { CartItem } from './../../../core/models/cart.model';
import { increaseOrDecraseItem, deleteItem } from './../../../actions/cart.actions';

@Component({
  selector: 'vaki-challenge-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  constructor(
    private store: Store<{ cart: [] }>
  ) { }

  ngOnInit(): void {
  }

  increaseOrDecreaseItem(action: boolean) {
    this.store.dispatch(increaseOrDecraseItem({
      reward_id: this.cartItem.reward_id,
      action: action
    }))
  }

  deleteItem() {
    this.store.dispatch(deleteItem({
      reward_id: this.cartItem.reward_id
    }))
  }

}

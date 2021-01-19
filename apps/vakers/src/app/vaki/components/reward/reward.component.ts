import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { addToCar } from './../../../actions/cart.actions';
import { Store, select } from '@ngrx/store';

import { CartItem } from './../../../core/models/cart.model';
import { VakiReward } from './../../../core/models/reward.model';

@Component({
  selector: 'vaki-challenge-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit, OnChanges {

  @Input() reward: VakiReward;

  notAvailable = false;

  constructor(
    private store: Store<{ cart: [] }>
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    const reward = this.reward
    this.notAvailable = reward.quantityAvailable - reward.claimed === 0;

    this.store.pipe(select('cart'))
      .subscribe(cart => {
        const cartClaimed: CartItem = cart.find((f: CartItem) => f.reward_id === this.reward.key)
        if (cartClaimed) {
          this.notAvailable = reward.quantityAvailable -
            (reward.claimed + cartClaimed.quantity) === 0;
        }
      })
  }

  addToCart() {
    this.store.dispatch(addToCar(
      {
        reward_id: this.reward.key,
        title: this.reward.title,
        value: this.reward.value,
        img: this.reward.img,
        available: this.reward.quantityAvailable - this.reward.claimed
      }
    ))
  }

}

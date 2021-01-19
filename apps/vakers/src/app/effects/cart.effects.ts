import { CartItem, RewardToCloud } from './../core/models/cart.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, concatMap, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';

import { CloudfunctionsService } from '../core/services/cloudfunctions.service';
import {
  addToCar,
  updateCar,
  increaseOrDecraseItem,
  deleteItem,
  completeBuy
} from './../actions/cart.actions';

@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    private store: Store<{ cart: [] }>,
    private cloudfunctionsService: CloudfunctionsService,
    private router: Router
  ) { }

  addCartSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addToCar),
        concatMap(action => of(action).pipe(
          withLatestFrom(this.store.select('cart'))
        )),
        tap(([reward, state]) => {
          let sendState: Partial<CartItem[]> = [...state];

          const rewuardInCart: CartItem = state.find((f: CartItem) =>
            f.reward_id === reward.reward_id
          )

          if (rewuardInCart) {
            sendState = this.deleteItem(reward.reward_id, sendState)
            sendState = [...sendState, {
              title: rewuardInCart.title,
              reward_id: rewuardInCart.reward_id,
              available: rewuardInCart.available - 1,
              value: rewuardInCart.value,
              img: rewuardInCart.img,
              quantity: rewuardInCart.quantity + 1
            }];

          } else {
            sendState = [...state, {
              title: reward.title,
              reward_id: reward.reward_id,
              available: reward.available - 1,
              value: reward.value,
              img: reward.img,
              quantity: 1
            }]
          }

          this.store.dispatch(updateCar({ newState: sendState }))
        })
      ),
    { dispatch: false }
  );

  increaseOrDecraseItemSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increaseOrDecraseItem),
        concatMap(action => of(action).pipe(
          withLatestFrom(this.store.select('cart'))
        )),
        tap(([action, state]) => {
          let sendState: Partial<CartItem[]> = [...state];
          let quantity: number;

          const rewuardInCart: CartItem = state.find((f: CartItem) =>
            f.reward_id === action.reward_id
          )

          if (action.action) {
            quantity = rewuardInCart.quantity + 1;
          } else {
            quantity = rewuardInCart.quantity - 1;
          }

          sendState = this.deleteItem(action.reward_id, sendState)

          sendState = [...sendState, {
            title: rewuardInCart.title,
            reward_id: rewuardInCart.reward_id,
            available: action.action ?
              rewuardInCart.available - 1 :
              rewuardInCart.available + 1,
            value: rewuardInCart.value,
            img: rewuardInCart.img,
            quantity: quantity
          }]

          this.store.dispatch(updateCar({ newState: sendState }))
        })
      ),
    { dispatch: false }
  );

  deleteItemSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteItem),
        concatMap(action => of(action).pipe(
          withLatestFrom(this.store.select('cart'))
        )),
        tap(([action, state]) => {
          let sendState: Partial<CartItem[]> = [...state];

          sendState = this.deleteItem(action.reward_id, sendState)

          this.store.dispatch(updateCar({ newState: sendState }))
        })
      ),
    { dispatch: false }
  );

  completeBuySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(completeBuy),
        concatMap(action => of(action).pipe(
          withLatestFrom(this.store.select('cart'))
        )),
        tap(([action, state]) => {
          const sendToCloud: RewardToCloud[] = []

          state.forEach((item: RewardToCloud) => {
            sendToCloud.push({
              reward_id: item.reward_id,
              quantity: item.quantity
            })
          });

          console.log({ sendToCloud })

          this.cloudfunctionsService.cartCheckOut(
            "W8W5nGMAWgAfoU5QE1jT",
            sendToCloud
          ).subscribe(result => {

            this.store.dispatch(updateCar({ newState: [] }))

            console.log(result)

            this.router.navigate(['/cart/finish']);
          })
        })
      ),
    { dispatch: false }
  );

  deleteItem(rewardId: string, cart: Partial<CartItem[]>) {
    const returnArray: Partial<CartItem[]> = [...cart]
    const index = cart.findIndex(f => f.reward_id === rewardId);
    returnArray.splice(index, 1);

    return returnArray;
  }
}
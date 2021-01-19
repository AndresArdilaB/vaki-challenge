import { createReducer, on } from '@ngrx/store'
import * as cartActions from '../actions/cart.actions'
import { CartItem } from '../core/models/cart.model'

export const initialState: Partial<CartItem[]> = [];

const _cartReducer = createReducer(
  initialState,
  on(cartActions.addToCar),
  on(cartActions.increaseOrDecraseItem),
  on(cartActions.deleteItem),
  on(cartActions.completeBuy),
  on(cartActions.updateCar, (state, result) => {
    const sortState = [...result.newState];
    sortState.sort((a, b) => a.title.length - b.title.length)
    return sortState;
  })
)

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}

import { createAction, props } from '@ngrx/store';
import { CartItem, RewardToCloud } from './../core/models/cart.model';

export const addToCar = createAction('addToCar',
  props<CartItem>(),
);

export const deleteItem = createAction('deleteItem',
  props<{ reward_id: string }>()
);

export const increaseOrDecraseItem = createAction('increaseItem',
  props<{ reward_id: string, action: boolean }>()
);

export const completeBuy = createAction('completeBuy');

export const updateCar = createAction('updateCar',
  props<{ newState: Partial<CartItem[]> }>()
);
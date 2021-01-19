import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { RewardToCloud } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CloudfunctionsService {

  constructor(
    private functions: AngularFireFunctions
  ) { }

  cartCheckOut(vaki_id: string, rewards: RewardToCloud[]) {
    const cartConfirmBuy = this.functions.httpsCallable('cartConfirmBuy')

    return cartConfirmBuy({
      vaki_id,
      rewards
    })
  }
}

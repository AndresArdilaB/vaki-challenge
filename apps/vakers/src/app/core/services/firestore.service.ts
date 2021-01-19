import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Vaki } from '../../core/models/vaki.model';
import { VakiReward } from './../../core/models/reward.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  getVaki() {
    return this.firestore.collection<Vaki>('vakis').doc('W8W5nGMAWgAfoU5QE1jT').get()
  }

  getRewards(vaki_id: string) {
    return this.firestore.collection<VakiReward>(
      'rewards', ref => ref.where('vaki_id', '==', vaki_id)
    ).valueChanges();
  }
}

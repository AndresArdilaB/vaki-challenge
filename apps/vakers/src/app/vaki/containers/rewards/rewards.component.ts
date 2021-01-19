import { Observable } from 'rxjs';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FirestoreService } from './../../../core/services/firestore.service';
import { VakiReward } from './../../../core/models/reward.model';

@Component({
  selector: 'vaki-challenge-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit, OnChanges {

  @Input() vaki_id: string;
  rewards$: Observable<VakiReward[]>;

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.vaki_id) {
      this.rewards$ = this.firestoreService.getRewards(this.vaki_id);
    }
  }

}

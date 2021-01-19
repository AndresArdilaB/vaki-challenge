import { FirestoreService } from './../../../core/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Vaki } from './../../../core/models/vaki.model';

@Component({
  selector: 'vaki-challenge-vaki',
  templateUrl: './vaki.component.html',
  styleUrls: ['./vaki.component.scss']
})
export class VakiComponent implements OnInit {

  vaki: Partial<Vaki> = {};

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getVaki()
      .subscribe((data) => {
        const vakiData: Partial<Vaki> = data.data()
        vakiData.id = data.id
        this.vaki = vakiData
      })
  }

}

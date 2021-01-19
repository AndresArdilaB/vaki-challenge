import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VakiRoutingModule } from './vaki-routing.module';
import { VakiComponent } from './components/vaki/vaki.component';
import { RewardsComponent } from './containers/rewards/rewards.component';
import { RewardComponent } from './components/reward/reward.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    VakiComponent,
    RewardsComponent,
    RewardComponent,
  ],
  imports: [
    CommonModule,
    VakiRoutingModule,
    SharedModule
  ]
})
export class VakiModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VakiComponent } from './components/vaki/vaki.component';

const routes: Routes = [
  {
    path: '',
    component: VakiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VakiRoutingModule { }

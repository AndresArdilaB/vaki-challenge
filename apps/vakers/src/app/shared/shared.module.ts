import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CartStatusComponent } from './widgets/cart-status/cart-status.component';
import { DateFormatPipe } from './pipes/date-format/date-format.pipe';
import { DaysToEndPipe } from './pipes/days-to-end/days-to-end.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CartStatusComponent,
    DateFormatPipe,
    DaysToEndPipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CartStatusComponent,
    MaterialModule,
    DateFormatPipe,
    DaysToEndPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }

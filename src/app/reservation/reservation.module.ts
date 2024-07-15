import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationListComponent, } from '../reservation-list/reservation-list.component';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReservationFormComponent,
    ReservationListComponent,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }

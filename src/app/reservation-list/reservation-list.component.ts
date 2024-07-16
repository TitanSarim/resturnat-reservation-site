import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, HomeModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{


  reservation: Reservation[] = []

  constructor(private reservationService: ReservationService){}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservation => {
      this.reservation = reservation
    });
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("deleted successfully")
    });
  }

}

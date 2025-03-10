import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private ReservationService: ReservationService, private router: Router, private activatedRoute: ActivatedRoute){

  }



  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
       this.ReservationService.getReservation(id).subscribe(reservation => {
        if(reservation){
          this.reservationForm.patchValue(reservation)
        }
      });

    }
  }

  onSubmit(){
    if(this.reservationForm.valid){
      let reservation  = this.reservationForm.value

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if(id){
        // Update
        this.ReservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("udapted processed")
        });
      }else{
        this.ReservationService.addReservation(reservation).subscribe(() => {
          console.log("Posting processed")
        });
        this.router.navigate(['/list'])
      }


    }
  }

}

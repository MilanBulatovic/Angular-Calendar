import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/send-data.service';
import { Appointment } from '../shared/models/appointment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss'],
})
export class AllAppointmentsComponent implements OnInit {
  allAppointments: Appointment[] = [];
  allAppointmentsPage: boolean = true;

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.appointments$.subscribe((appointments) => {
      this.allAppointments = appointments;
    });
  }

  onViewAppointment(appointment: Appointment, index: number) {
    this.router.navigate(['/all-appointments', index], {
      state: { appointment: this.allAppointments[index] },
    });
  }
}

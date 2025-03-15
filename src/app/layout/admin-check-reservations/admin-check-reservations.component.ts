import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-check-reservations',
  standalone: false,
  templateUrl: './admin-check-reservations.component.html',
  styleUrl: './admin-check-reservations.component.scss'
})
export class AdminCheckReservationsComponent {

  eventsData: any[] = [];
  displayedColumns: string[] = ['eventName', 'eventType', 'eventDate','eventStartTime','eventEndTime','place','equipments', 'action'];

  reservations = [
    {
      eventName: 'Wedding Ceremony',
      eventType: 'Wedding',
      date: new Date('2025-03-20'),
      startTime: new Date('2025-03-20T10:00:00'),
      endTime: new Date('2025-03-20T14:00:00'),
      place: 'Hall A',
      equipment: ['Projector', 'Sound System'],
      status: 'pending'
    },
    {
      eventName: 'Conference',
      eventType: 'Corporate',
      date: new Date('2025-03-21'),
      startTime: new Date('2025-03-21T09:00:00'),
      endTime: new Date('2025-03-21T12:00:00'),
      place: 'Hall B',
      equipment: ['Microphone', 'Projector'],
      status: 'pending'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.eventsData =[
      {
        eventName: 'Wedding Ceremony',
        eventType: 'Wedding',
        date: new Date('2025-03-20'),
        startTime: new Date('2025-03-20T10:00:00'),
        endTime: new Date('2025-03-20T14:00:00'),
        place: 'Hall A',
        equipment: ['Projector', 'Sound System'],
        status: 'pending'
      },
      {
        eventName: 'Conference',
        eventType: 'Corporate',
        date: new Date('2025-03-21'),
        startTime: new Date('2025-03-21T09:00:00'),
        endTime: new Date('2025-03-21T12:00:00'),
        place: 'Hall B',
        equipment: ['Microphone', 'Projector'],
        status: 'pending'
      }
    ];
  }


  approveReservation(reservation: any): void {
    reservation.status = 'approved';
    // Here you can add logic to save the status to the backend
    console.log('Reservation approved:', reservation);
  }

  rejectReservation(reservation: any): void {
    reservation.status = 'rejected';
    // Here you can add logic to save the status to the backend
    console.log('Reservation rejected:', reservation);
  }

}

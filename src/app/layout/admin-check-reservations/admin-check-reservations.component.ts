import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-check-reservations',
  standalone: false,
  templateUrl: './admin-check-reservations.component.html',
  styleUrl: './admin-check-reservations.component.scss'
})
export class AdminCheckReservationsComponent {

  eventsData: any[] = [];
  // displayedColumns: string[] = ['eventName', 'eventType', 'dateAndTime','place','equipments', 'action'];
  displayedColumns: string[] = ['eventName', 'eventType', 'dateAndTime','place','action'];
  reservations = [
    {
      eventName: 'Wedding Ceremony',
      eventType: 'Wedding',
      dateAndTime: '',
      place: 'Hall A',
      equipment: ['Projector', 'Sound System'],
      status: 'pending'
    },
    {
      eventName: 'Conference',
      eventType: 'Corporate',
      dateAndTime: '',
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
        eventName: 'Event 1',
        eventType: 'Conference',
        dateAndTime: '3/21/25  9.00A.M - 11.00A.M ',
        place: 'Auditorium 1',
        equipments: ['Projector 1', 'Sound System 1'],
        status: 'pending'
      },
      {
        eventName: 'Event 2',
        eventType: 'Workshop',
        dateAndTime: '3/22/25  9.00A.M - 11.00A.M',
        place: 'Lecture Hall 2',
        equipments: ['Microphone 1', 'Projector 1'],
        status: 'pending'
      },
      {
        eventName: 'Event 3',
        eventType: 'Music Festival',
        dateAndTime: '3/23/25  1.00P.M - 3.00P.M',
        place: 'Auditorium 2',
        equipments: ['Projector 2', 'Sound System 1'],
        status: 'pending'
      },
      {
        eventName: 'Event 4',
        eventType: 'Seminar',
        dateAndTime: '3/23/25  9.00A.M - 11.00A.M',
        place: 'Auditorium 1',
        equipments: ['Microphone 2', 'Projector 1'],
        status: 'pending'
      },
      {
        eventName: 'Event 5',
        eventType: 'Lecture',
        dateAndTime: '3/23/25  1.00P.M - 3.00P.M',
        place: 'Lecture Hall 2',
        equipments: ['Microphone 1', 'Projector 1'],
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

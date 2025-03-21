import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShedulePopUpComponent } from '../shedule-pop-up/shedule-pop-up.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-shedule',
  standalone: false,
  templateUrl: './shedule.component.html',
  styleUrl: './shedule.component.scss'
})
export class SheduleComponent implements OnInit{
onDateChange($event: MatDatepickerInputEvent<any,any>) {
throw new Error('Method not implemented.');
}
   
  eventsData: any[] = [];
  displayedColumns: string[] = ['eventName', 'eventType', 'eventDate', 'place', 'action', 'status'];
  eventForm: FormGroup | undefined;
  eventTypes = ['Conference', 'Workshop', 'Lecture', 'Seminar'];
  places = ['Auditorium', 'Classroom 101', 'Library', 'Gym'];
  equipmentList: { name: string; quantity: string }[] = [];
  isEditMode = false;
  viewDate: Date = new Date();

  constructor(private dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.loadEvents();
  }

  initializeForm() {
    this.eventForm = this.fb.group({
      eventName: [''],
      eventType: [''],
      description: [''],
      eventDate: [''],
      startTime: [''],
      endTime: [''],
      place: [''],
      status: [''],
      equipmentName: [''],
      equipmentQuantity: ['']
    });
  }

  openEventForm() {
    const dialogRef = this.dialog.open(ShedulePopUpComponent, {
      // width: '500px',
      data: { form: this.eventForm, isEditMode: this.isEditMode }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveEvent(result);
      }
    });
  }

  loadEvents() {
    this.eventsData = [
      { eventName: 'Event 1', eventType: 'Conference', eventDate: '3/21/25  9.00A.M - 11.00A.M ', place: 'Auditorium 1',status:'pending' },
      { eventName: 'Event 2', eventType: 'Workshop', eventDate: '3/21/25  11.00A.M - 1.00P.M ', place: 'Lecture Hall 3', status:'approved' },
      { eventName: 'Event 3', eventType: 'Lecture', eventDate: '3/22/25  9.00A.M - 11.00A.M ', place: 'Lecture Hall 1', status:'approved' },
      { eventName: 'Event 4', eventType: 'Music Festival', eventDate: '3/22/25  3.00A.M - 5.00P.M ', place: 'Auditorium 2', status:'rejected' },
      { eventName: 'Event 5', eventType: 'Lecture', eventDate: '3/23/25  9.00A.M - 11.00A.M ', place: 'Lecture Hall 2', status:'rejected' },
      { eventName: 'Event 6', eventType: 'Seminar', eventDate: '3/23/25  1.00P.M - 3.00P.M ', place: 'Auditorium 2', status:'pending' }

    ];
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'status-pending';
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      default:
        return '';
    }
  }
  saveEvent(eventData: any) {
    if (this.isEditMode) {
      // Update event logic here if needed
    } else {
      this.eventsData.push(eventData);
    }
  }

  onEditEvent(event: any) {
    this.isEditMode = true;
    this.eventForm?.patchValue(event);
    this.openEventForm();
  }

  onDeleteEvent(event: any) {
    this.eventsData = this.eventsData.filter(e => e !== event);
  }

}

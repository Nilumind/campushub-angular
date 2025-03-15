import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShedulePopUpComponent } from '../shedule-pop-up/shedule-pop-up.component';
// import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-shedule',
  standalone: false,
  templateUrl: './shedule.component.html',
  styleUrl: './shedule.component.scss'
})
export class SheduleComponent implements OnInit{
   
  eventsData: any[] = [];
  displayedColumns: string[] = ['eventName', 'eventType', 'eventDate', 'place', 'action'];
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
      equipmentName: [''],
      equipmentQuantity: ['']
    });
  }

  openEventForm() {
    const dialogRef = this.dialog.open(ShedulePopUpComponent, {
      width: '500px',
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
      { eventName: 'Event 1', eventType: 'Conference', eventDate: new Date('2025-03-20'), place: 'Auditorium' },
      { eventName: 'Event 2', eventType: 'Workshop', eventDate: new Date('2025-03-21'), place: 'Library' },
      { eventName: 'Event 3', eventType: 'Lecture', eventDate: new Date('2025-03-22'), place: 'Classroom' }
    ];
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

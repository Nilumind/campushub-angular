import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatOption, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-shedule-pop-up',
  standalone: false,
  templateUrl: './shedule-pop-up.component.html',
  styleUrl: './shedule-pop-up.component.scss'
})
export class ShedulePopUpComponent implements OnInit {
  eventForm: FormGroup;
  eventTypes: string[] = ['Meeting', 'Workshop', 'Seminar', 'Conference'];
  timeSlots : string[] = ['9.00A.M - 11.00A.M','11.00A.M - 1.00P.M','1.00P.M - 3.00P.M','3.00A.M - 5.00P.M']
  places: string[] = ['Lecture Hall 1', 'Lecture Hall 2', 'Lecture Hall 3', 'Lecture Hall 4', 'Lecture Hall 6','Auditorium 1', 'Auditorium 2' ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ShedulePopUpComponent>
  ) {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventType: ['', Validators.required],
      description: [''],
      eventDate: ['', Validators.required],
      timeSlot: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      place: ['', Validators.required],
      equipmentName: [''],
      equipmentQuantity: ['']
    });
  }

  ngOnInit(): void {
    
  }

  submitForm() {
    if (this.eventForm.valid) {
      console.log('Event Scheduled:', this.eventForm.value);
      this.closeDialog();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

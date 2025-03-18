import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatOption, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-shedule-pop-up',
  standalone: false,
  templateUrl: './shedule-pop-up.component.html',
  styleUrl: './shedule-pop-up.component.scss'
})
export class ShedulePopUpComponent implements OnInit {
removeEquipment(_t127: number) {
throw new Error('Method not implemented.');
}

  eventForm!: FormGroup;
  eventTypes = ['Conference', 'Workshop', 'Lecture', 'Seminar'];
  places = ['Auditorium', 'Classroom 101', 'Library', 'Gym'];
  equipmentList: { name: string; quantity: number }[] = [];
  isEditMode = false;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initializeForm();
  }
  ngOnInit(): void {
    if (this.data && this.data.form) {
      this.eventForm = this.data.form;
      this.isEditMode = this.data.isEditMode;
    }
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
  addEquipment() {
    const equipmentName = this.eventForm!.get('equipmentName')?.value ?? '';
    const equipmentQuantity = this.eventForm!.get('equipmentQuantity')?.value ?? '';

    if (equipmentName && equipmentQuantity) {
      this.equipmentList.push({ name: equipmentName, quantity: equipmentQuantity });
      if (this.eventForm) {
        this.eventForm.patchValue({ equipmentName: '', equipmentQuantity: '' });
      }
    }
  }

}

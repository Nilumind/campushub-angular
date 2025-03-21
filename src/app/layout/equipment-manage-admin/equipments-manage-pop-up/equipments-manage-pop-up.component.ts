import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-equipments-manage-pop-up',
  standalone: false,
  templateUrl: './equipments-manage-pop-up.component.html',
  styleUrl: './equipments-manage-pop-up.component.scss'
})
export class EquipmentsManagePopUpComponent {

  equipmentList = [
    { name: 'Projector', quantity: 2 },
    { name: 'Speakers', quantity: 4 }
  ];
  newEquipment = { name: '', quantity: 1 };

  constructor(public dialogRef: MatDialogRef<EquipmentsManagePopUpComponent>) {}

  addEquipment() {
    if (this.newEquipment.name.trim() && this.newEquipment.quantity > 0) {
      this.equipmentList.push({ ...this.newEquipment });
      this.newEquipment = { name: '', quantity: 1 };
    }
  }

  updateQuantity(item: any) {
    if (item.quantity < 0) {
      item.quantity = 0; // Prevent negative values
    }
  }
  editEquipment(item: any) {
    item.isEditing = true;
  }

  saveEquipment(item: any) {
    item.isEditing = false;
  }

  deleteEquipment(item: any) {
    this.equipmentList = this.equipmentList.filter(e => e !== item);
  }

  saveAllChanges() {
    console.log('Saved Equipment List:', this.equipmentList);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.equipmentList);
  }

}

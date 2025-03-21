import { Component } from '@angular/core';
import { EquipmentsManagePopUpComponent } from '../equipments-manage-pop-up/equipments-manage-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipments-manage',
  standalone: false,
  templateUrl: './equipments-manage.component.html',
  styleUrl: './equipments-manage.component.scss'
})
export class EquipmentsManageComponent {

  constructor(public dialog: MatDialog) {}

  openManageEquipmentDialog() {
    const dialogRef = this.dialog.open(EquipmentsManagePopUpComponent, {
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Updated Equipment List:', result);
      }
    });
  }

}

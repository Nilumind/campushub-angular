import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsManagePopUpComponent } from './equipments-manage-pop-up.component';

describe('EquipmentsManagePopUpComponent', () => {
  let component: EquipmentsManagePopUpComponent;
  let fixture: ComponentFixture<EquipmentsManagePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentsManagePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentsManagePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

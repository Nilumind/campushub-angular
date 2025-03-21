import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsManageComponent } from './equipments-manage.component';

describe('EquipmentsManageComponent', () => {
  let component: EquipmentsManageComponent;
  let fixture: ComponentFixture<EquipmentsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentsManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckReservationsComponent } from './admin-check-reservations.component';

describe('AdminCheckReservationsComponent', () => {
  let component: AdminCheckReservationsComponent;
  let fixture: ComponentFixture<AdminCheckReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCheckReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCheckReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

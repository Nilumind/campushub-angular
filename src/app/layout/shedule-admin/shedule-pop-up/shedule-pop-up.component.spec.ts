import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulePopUpComponent } from './shedule-pop-up.component';

describe('ShedulePopUpComponent', () => {
  let component: ShedulePopUpComponent;
  let fixture: ComponentFixture<ShedulePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShedulePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShedulePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

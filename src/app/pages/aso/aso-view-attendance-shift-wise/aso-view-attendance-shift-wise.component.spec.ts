import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoViewAttendanceShiftWiseComponent } from './aso-view-attendance-shift-wise.component';

describe('AsoViewAttendanceShiftWiseComponent', () => {
  let component: AsoViewAttendanceShiftWiseComponent;
  let fixture: ComponentFixture<AsoViewAttendanceShiftWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoViewAttendanceShiftWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoViewAttendanceShiftWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

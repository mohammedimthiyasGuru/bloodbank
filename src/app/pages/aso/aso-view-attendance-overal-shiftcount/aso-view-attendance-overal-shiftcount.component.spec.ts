import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoViewAttendanceOveralShiftcountComponent } from './aso-view-attendance-overal-shiftcount.component';

describe('AsoViewAttendanceOveralShiftcountComponent', () => {
  let component: AsoViewAttendanceOveralShiftcountComponent;
  let fixture: ComponentFixture<AsoViewAttendanceOveralShiftcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoViewAttendanceOveralShiftcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoViewAttendanceOveralShiftcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

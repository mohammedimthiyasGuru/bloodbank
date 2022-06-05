import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoAttendanceoverviewComponent } from './aso-attendanceoverview.component';

describe('AsoAttendanceoverviewComponent', () => {
  let component: AsoAttendanceoverviewComponent;
  let fixture: ComponentFixture<AsoAttendanceoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoAttendanceoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoAttendanceoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

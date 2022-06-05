import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoAttendancemarkingComponent } from './aso-attendancemarking.component';

describe('AsoAttendancemarkingComponent', () => {
  let component: AsoAttendancemarkingComponent;
  let fixture: ComponentFixture<AsoAttendancemarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoAttendancemarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoAttendancemarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

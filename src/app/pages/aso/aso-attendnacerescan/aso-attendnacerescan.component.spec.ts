import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoAttendnacerescanComponent } from './aso-attendnacerescan.component';

describe('AsoAttendnacerescanComponent', () => {
  let component: AsoAttendnacerescanComponent;
  let fixture: ComponentFixture<AsoAttendnacerescanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoAttendnacerescanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoAttendnacerescanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

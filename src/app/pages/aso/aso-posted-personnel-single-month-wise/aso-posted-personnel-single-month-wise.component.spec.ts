import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoPostedPersonnelSingleMonthWiseComponent } from './aso-posted-personnel-single-month-wise.component';

describe('AsoPostedPersonnelSingleMonthWiseComponent', () => {
  let component: AsoPostedPersonnelSingleMonthWiseComponent;
  let fixture: ComponentFixture<AsoPostedPersonnelSingleMonthWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoPostedPersonnelSingleMonthWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoPostedPersonnelSingleMonthWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

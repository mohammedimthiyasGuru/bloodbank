import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoPostedPersonnelSingleDateWiseComponent } from './aso-posted-personnel-single-date-wise.component';

describe('AsoPostedPersonnelSingleDateWiseComponent', () => {
  let component: AsoPostedPersonnelSingleDateWiseComponent;
  let fixture: ComponentFixture<AsoPostedPersonnelSingleDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoPostedPersonnelSingleDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoPostedPersonnelSingleDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoPostedPersonnelComponent } from './aso-posted-personnel.component';

describe('AsoPostedPersonnelComponent', () => {
  let component: AsoPostedPersonnelComponent;
  let fixture: ComponentFixture<AsoPostedPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoPostedPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoPostedPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

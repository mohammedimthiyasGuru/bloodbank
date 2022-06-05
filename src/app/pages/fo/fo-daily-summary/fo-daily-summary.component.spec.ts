import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDailySummaryComponent } from './fo-daily-summary.component';

describe('FoDailySummaryComponent', () => {
  let component: FoDailySummaryComponent;
  let fixture: ComponentFixture<FoDailySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoDailySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoDailySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

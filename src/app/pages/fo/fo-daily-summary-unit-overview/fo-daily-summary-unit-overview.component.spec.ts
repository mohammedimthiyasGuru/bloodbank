import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDailySummaryUnitOverviewComponent } from './fo-daily-summary-unit-overview.component';

describe('FoDailySummaryUnitOverviewComponent', () => {
  let component: FoDailySummaryUnitOverviewComponent;
  let fixture: ComponentFixture<FoDailySummaryUnitOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoDailySummaryUnitOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoDailySummaryUnitOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

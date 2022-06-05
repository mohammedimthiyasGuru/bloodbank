import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDailySummaryUnitSingleviewComponent } from './fo-daily-summary-unit-singleview.component';

describe('FoDailySummaryUnitSingleviewComponent', () => {
  let component: FoDailySummaryUnitSingleviewComponent;
  let fixture: ComponentFixture<FoDailySummaryUnitSingleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoDailySummaryUnitSingleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoDailySummaryUnitSingleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

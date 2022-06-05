import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDailySummarySingleMonthWiseComponent } from './fo-daily-summary-single-month-wise.component';

describe('FoDailySummarySingleMonthWiseComponent', () => {
  let component: FoDailySummarySingleMonthWiseComponent;
  let fixture: ComponentFixture<FoDailySummarySingleMonthWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoDailySummarySingleMonthWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoDailySummarySingleMonthWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

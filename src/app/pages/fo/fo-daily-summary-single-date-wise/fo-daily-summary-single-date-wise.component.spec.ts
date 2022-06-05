import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDailySummarySingleDateWiseComponent } from './fo-daily-summary-single-date-wise.component';

describe('FoDailySummarySingleDateWiseComponent', () => {
  let component: FoDailySummarySingleDateWiseComponent;
  let fixture: ComponentFixture<FoDailySummarySingleDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoDailySummarySingleDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoDailySummarySingleDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

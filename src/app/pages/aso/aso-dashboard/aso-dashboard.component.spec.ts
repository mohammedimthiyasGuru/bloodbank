import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoDashboardComponent } from './aso-dashboard.component';

describe('AsoDashboardComponent', () => {
  let component: AsoDashboardComponent;
  let fixture: ComponentFixture<AsoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

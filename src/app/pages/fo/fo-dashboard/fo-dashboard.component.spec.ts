import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDashboardComponent } from './fo-dashboard.component';

describe('FoDashboardComponent', () => {
  let component: FoDashboardComponent;
  let fixture: ComponentFixture<FoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

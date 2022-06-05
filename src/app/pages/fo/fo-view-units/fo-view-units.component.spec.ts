import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoViewUnitsComponent } from './fo-view-units.component';

describe('FoViewUnitsComponent', () => {
  let component: FoViewUnitsComponent;
  let fixture: ComponentFixture<FoViewUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoViewUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoViewUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

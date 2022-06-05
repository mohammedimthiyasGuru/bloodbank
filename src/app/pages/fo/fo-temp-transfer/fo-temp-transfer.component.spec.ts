import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoTempTransferComponent } from './fo-temp-transfer.component';

describe('FoTempTransferComponent', () => {
  let component: FoTempTransferComponent;
  let fixture: ComponentFixture<FoTempTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoTempTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoTempTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

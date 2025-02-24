import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcTrsComponent } from './plc-trs.component';

describe('PlcTrsComponent', () => {
  let component: PlcTrsComponent;
  let fixture: ComponentFixture<PlcTrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlcTrsComponent]
    });
    fixture = TestBed.createComponent(PlcTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

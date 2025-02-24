import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtTrsComponent } from './ajt-trs.component';

describe('AjtTrsComponent', () => {
  let component: AjtTrsComponent;
  let fixture: ComponentFixture<AjtTrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjtTrsComponent]
    });
    fixture = TestBed.createComponent(AjtTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

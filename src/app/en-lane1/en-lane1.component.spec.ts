import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLane1Component } from './en-lane1.component';

describe('EnLane1Component', () => {
  let component: EnLane1Component;
  let fixture: ComponentFixture<EnLane1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLane1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLane1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

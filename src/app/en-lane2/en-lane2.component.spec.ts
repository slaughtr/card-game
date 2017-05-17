import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLane2Component } from './en-lane2.component';

describe('EnLane2Component', () => {
  let component: EnLane2Component;
  let fixture: ComponentFixture<EnLane2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLane2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLane2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

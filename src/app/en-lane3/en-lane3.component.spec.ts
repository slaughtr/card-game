import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLane3Component } from './en-lane3.component';

describe('EnLane3Component', () => {
  let component: EnLane3Component;
  let fixture: ComponentFixture<EnLane3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLane3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLane3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

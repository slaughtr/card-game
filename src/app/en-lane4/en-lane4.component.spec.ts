import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLane4Component } from './en-lane4.component';

describe('EnLane4Component', () => {
  let component: EnLane4Component;
  let fixture: ComponentFixture<EnLane4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLane4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLane4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

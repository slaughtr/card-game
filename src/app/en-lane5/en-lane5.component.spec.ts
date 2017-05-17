import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLane5Component } from './en-lane5.component';

describe('EnLane5Component', () => {
  let component: EnLane5Component;
  let fixture: ComponentFixture<EnLane5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLane5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLane5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

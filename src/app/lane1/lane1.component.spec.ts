import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lane1Component } from './lane1.component';

describe('Lane1Component', () => {
  let component: Lane1Component;
  let fixture: ComponentFixture<Lane1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lane1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lane1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

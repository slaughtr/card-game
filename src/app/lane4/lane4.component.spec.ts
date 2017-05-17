import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lane4Component } from './lane4.component';

describe('Lane4Component', () => {
  let component: Lane4Component;
  let fixture: ComponentFixture<Lane4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lane4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lane4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

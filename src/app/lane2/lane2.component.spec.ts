import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lane2Component } from './lane2.component';

describe('Lane2Component', () => {
  let component: Lane2Component;
  let fixture: ComponentFixture<Lane2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lane2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lane2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lane3Component } from './lane3.component';

describe('Lane3Component', () => {
  let component: Lane3Component;
  let fixture: ComponentFixture<Lane3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lane3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lane3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

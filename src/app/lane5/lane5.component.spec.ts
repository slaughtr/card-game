import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lane5Component } from './lane5.component';

describe('Lane5Component', () => {
  let component: Lane5Component;
  let fixture: ComponentFixture<Lane5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lane5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lane5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

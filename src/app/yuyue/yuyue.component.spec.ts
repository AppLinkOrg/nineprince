import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuyueComponent } from './yuyue.component';

describe('YuyueComponent', () => {
  let component: YuyueComponent;
  let fixture: ComponentFixture<YuyueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuyueComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuyueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

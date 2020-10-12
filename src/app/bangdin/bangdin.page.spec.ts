import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangdinPage } from './bangdin.page';

describe('BangdinPage', () => {
  let component: BangdinPage;
  let fixture: ComponentFixture<BangdinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangdinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangdinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

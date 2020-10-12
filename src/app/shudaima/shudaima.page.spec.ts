import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShudaimaPage } from './shudaima.page';

describe('ShudaimaPage', () => {
  let component: ShudaimaPage;
  let fixture: ComponentFixture<ShudaimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShudaimaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShudaimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

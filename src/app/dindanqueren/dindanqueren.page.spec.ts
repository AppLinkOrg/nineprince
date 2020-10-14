import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DindanquerenPage } from './dindanqueren.page';

describe('DindanquerenPage', () => {
  let component: DindanquerenPage;
  let fixture: ComponentFixture<DindanquerenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DindanquerenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DindanquerenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

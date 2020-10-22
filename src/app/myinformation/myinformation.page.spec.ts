import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinformationPage } from './myinformation.page';

describe('MyinformationPage', () => {
  let component: MyinformationPage;
  let fixture: ComponentFixture<MyinformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

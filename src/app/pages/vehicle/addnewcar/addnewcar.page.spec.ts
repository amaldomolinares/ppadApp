import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcarPage } from './addnewcar.page';

describe('AddnewcarPage', () => {
  let component: AddnewcarPage;
  let fixture: ComponentFixture<AddnewcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

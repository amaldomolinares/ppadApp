import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVehiclePage } from './details-vehicle.page';

describe('DetailsVehiclePage', () => {
  let component: DetailsVehiclePage;
  let fixture: ComponentFixture<DetailsVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

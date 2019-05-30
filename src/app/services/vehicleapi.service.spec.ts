import { TestBed } from '@angular/core/testing';

import { VehicleapiService } from './vehicleapi.service';

describe('VehicleapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleapiService = TestBed.get(VehicleapiService);
    expect(service).toBeTruthy();
  });
});

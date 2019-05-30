import { TestBed } from '@angular/core/testing';

import { OrderapiService } from './orderapi.service';

describe('OrderapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderapiService = TestBed.get(OrderapiService);
    expect(service).toBeTruthy();
  });
});

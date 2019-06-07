import { TestBed } from '@angular/core/testing';

import { TaskapiService } from './taskapi.service';

describe('TaskapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskapiService = TestBed.get(TaskapiService);
    expect(service).toBeTruthy();
  });
});

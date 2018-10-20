import { TestBed } from '@angular/core/testing';

import { WeaherService } from './weaher.service';

describe('WeaherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeaherService = TestBed.get(WeaherService);
    expect(service).toBeTruthy();
  });
});

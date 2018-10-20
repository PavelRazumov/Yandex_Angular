import { TestBed } from '@angular/core/testing';

import { NewsGeoService } from './news-geo.service';

describe('NewsGeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsGeoService = TestBed.get(NewsGeoService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ToonService } from './toon.service';

describe('ToonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToonService = TestBed.get(ToonService);
    expect(service).toBeTruthy();
  });
});

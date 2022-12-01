import { TestBed } from '@angular/core/testing';

import { MindicatorapiService } from './mindicatorapi.service';

describe('MindicatorapiService', () => {
  let service: MindicatorapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindicatorapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

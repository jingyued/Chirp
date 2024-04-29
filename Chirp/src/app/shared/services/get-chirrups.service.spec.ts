import { TestBed } from '@angular/core/testing';

import { GetChirrupsService } from './get-chirrups.service';

describe('GetChirrupsService', () => {
  let service: GetChirrupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChirrupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DialogControlService } from './dialog-control.service';

describe('DialogControlService', () => {
  let service: DialogControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

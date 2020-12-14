import { TestBed } from '@angular/core/testing';

import { AsociacionsService } from './asociacions.service';

describe('AsociacionsService', () => {
  let service: AsociacionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsociacionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

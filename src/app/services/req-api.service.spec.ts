import { TestBed } from '@angular/core/testing';

import { ReqAPIService } from './req-api.service';

describe('ReqAPIService', () => {
  let service: ReqAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

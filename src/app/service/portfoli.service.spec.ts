import { TestBed } from '@angular/core/testing';

import { PortfoliService } from './portfoli.service';

describe('PortfoliService', () => {
  let service: PortfoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

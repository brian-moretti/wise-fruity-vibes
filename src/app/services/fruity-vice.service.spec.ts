import { TestBed } from '@angular/core/testing';

import { FruityViceService } from './fruity-vice.service';

describe('FruityViceService', () => {
  let service: FruityViceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruityViceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

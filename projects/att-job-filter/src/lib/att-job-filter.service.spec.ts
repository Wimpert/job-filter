import { TestBed } from '@angular/core/testing';

import { AttJobFilterService } from './att-job-filter.service';

describe('AttJobFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttJobFilterService = TestBed.get(AttJobFilterService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReportersService } from './reporters.service';

describe('ReportersService', () => {
  let service: ReportersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WhiteCardServiceService } from './white-card-service.service';

describe('WhiteCardServiceService', () => {
  let service: WhiteCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiteCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

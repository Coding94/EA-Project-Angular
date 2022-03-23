import { TestBed } from '@angular/core/testing';

import { ListCardServiceService } from './list-card-service.service';

describe('ListCardServiceService', () => {
  let service: ListCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

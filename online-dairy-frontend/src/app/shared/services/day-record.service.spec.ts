import { TestBed } from '@angular/core/testing';

import { DayRecordService } from './day-record.service';

describe('DayRecordService', () => {
  let service: DayRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

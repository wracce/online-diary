import { TestBed } from '@angular/core/testing';

import { DiaryPageService } from './diary-page.service';

describe('DiaryPageService', () => {
  let service: DiaryPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaryPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

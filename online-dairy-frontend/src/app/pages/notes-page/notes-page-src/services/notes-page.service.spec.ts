import { TestBed } from '@angular/core/testing';

import { NotesPageService } from './notes-page.service';

describe('NotesPageService', () => {
  let service: NotesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

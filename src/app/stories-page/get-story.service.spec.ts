import { TestBed } from '@angular/core/testing';

import { GetStoryService } from './get-story.service';

describe('GetStoryService', () => {
  let service: GetStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

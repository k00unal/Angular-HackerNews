import { TestBed } from '@angular/core/testing';

import { AppHackerNewsService } from './app-hacker-news.service';

describe('AppHackerNewsService', () => {
  let service: AppHackerNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppHackerNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

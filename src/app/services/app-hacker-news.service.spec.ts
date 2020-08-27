import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppHackerNewsService } from './app-hacker-news.service';


describe('AppHackerNewsService', () => {
   let service: AppHackerNewsService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [AppHackerNewsService]
        });
        service = TestBed.get(AppHackerNewsService);
    });

  it('should be created', () => {
    const service: AppHackerNewsService = TestBed.get(AppHackerNewsService);
    expect(service).toBeTruthy();
  });
});
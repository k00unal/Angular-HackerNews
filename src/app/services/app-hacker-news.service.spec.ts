import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AppHackerNewsService } from './app-hacker-news.service';

import { News } from './../interface/news';

describe('AppHackerNewsService', () => {
  let service: AppHackerNewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AppHackerNewsService],
    });
    service = TestBed.get(AppHackerNewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: AppHackerNewsService = TestBed.get(AppHackerNewsService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const service: AppHackerNewsService = TestBed.get(AppHackerNewsService);
    const dummyPosts: News = {
      hits: [
        {
          objectID: '607271',
          author: 'pg',
          created_at: '2009-05-13T17:48:54.000Z',
          num_comments: '107',
          points: '300',
          title:
            'HN Frontpage ranked using only votes from accounts over a year old',
          url: 'http://news.ycombinator.com/classic',
        },
      ],
      page: 6,
    };

    service.getNews(6).subscribe((news) => {
      expect(news.hits.length).toBe(1);
      expect(news).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.ROOT_URl}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });
  afterEach(() => {
    httpMock.verify();
  });
});

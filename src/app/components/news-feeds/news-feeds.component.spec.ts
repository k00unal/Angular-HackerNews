import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsFeedsComponent } from './news-feeds.component';
import { ShortDomainPipe } from 'src/app/pipes/short-domain.pipe';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';

describe('NewsFeedsComponent', () => {
  let component: NewsFeedsComponent;
  let fixture: ComponentFixture<NewsFeedsComponent>;

  const testData = [
    {
      created_at: '2017-03-13T12:18:31.000Z',
      title: 'Stories that Hacker News removes from the front page',
      url:
        'http://sangaline.com/post/the-stories-that-hacker-news-removes-from-the-front-page/',
      author: 'foob',
      points: 1274,
      num_comments: 313,
    },
    {
      created_at: '2017-03-13T12:18:31.000Z',
      title: 'test story',
      url:
        'http://sangaline.com/post/the-stories-that-hacker-news-removes-from-the-front-page/',
      author: 'foob',
      points: 345,
      num_comments: 387,
    },
  ];

  const Ids = [7672];
  const votes = [1274];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [NewsFeedsComponent, ShortDomainPipe, DateAgoPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setup() {
    const fixture = TestBed.createComponent(NewsFeedsComponent);
    const app = fixture.debugElement.componentInstance;
    return { fixture, app };
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadData()', async(() => {
    component.news = testData;
    component.loadData(false);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.currentPage).toBeFalsy();
    });
  }));
});

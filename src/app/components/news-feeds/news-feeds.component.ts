import { AppHackerNewsService } from '../../services/app-hacker-news.service';
import { Component, OnInit } from '@angular/core';

export interface News {
  hits: [
    {
      objectID: string;
      points: string;
      num_comments: string;
      created_at: string;
      title: string;
      url: string;
      author: string;
    }
  ];
  page: number;
}

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.scss'],
})
export class NewsFeedsComponent implements OnInit {
  constructor(private NewsService: AppHackerNewsService) {}

  hideme = {};
  news = [];
  votes = [];
  Ids = [];
  chart = [];
  STORAGE_KEY = 'local_todolist';
  currentPage: number;
  currentTodoList = [];

  ngOnInit(): void {
    this.loaddata(false);
  }

  loaddata(fromPagination): void {
    if (!fromPagination && sessionStorage.getItem('news')) {
      this.news = JSON.parse(sessionStorage.getItem('news'));
      this.currentPage = JSON.parse(sessionStorage.getItem('currentPage'));

      this.news.forEach((y) => {
        this.Ids.push(y.objectID);
        this.votes.push(y.points);
      });
    } else {
      if (!fromPagination && localStorage.getItem('pageNo')) {
        this.currentPage = JSON.parse(localStorage.getItem('pageNo'));
      }
      this.NewsService.getNews(
        this.currentPage ? this.currentPage : 0
      ).subscribe((news: News) => {
        this.news = news.hits;
        this.currentPage = news.page;
        sessionStorage.setItem('currentPage', JSON.stringify(this.currentPage));
        console.log(this.news);
        console.log(this.currentPage);
        sessionStorage.setItem('news', JSON.stringify(this.news));

        this.news.forEach((y) => {
          this.Ids.push(y.objectID);
          this.votes.push(y.points);
        });
      });
    }
  }

  hideMe(index) {
    this.news.splice(index, 1);
    if (this.news.length === 0) {
      return this.nextData();
    }
    sessionStorage.setItem('news', JSON.stringify(this.news));
  }
  nextData(): void {
    this.currentPage = this.currentPage + 1;
    this.Ids = [];
    this.votes = [];
    this.loaddata(true);
  }
  prevData(): void {
    this.currentPage = this.currentPage - 1;
    this.Ids = [];
    this.votes = [];
    this.loaddata(true);
  }
}

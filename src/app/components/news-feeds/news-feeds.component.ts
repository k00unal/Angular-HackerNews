import { AppHackerNewsService } from '../../services/app-hacker-news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.scss'],
})
export class NewsFeedsComponent implements OnInit {
  news;

  constructor(private AppHackerNewsService: AppHackerNewsService) {
    this.AppHackerNewsService.getNews().subscribe((data) => {
      console.log(data);
      this.news = data;
    });
  }

  ngOnInit(): void {}
}

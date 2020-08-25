import { AppHackerNewsService } from '../../services/app-hacker-news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.scss'],
})
export class NewsFeedsComponent implements OnInit {
  hideme = {};
  news;

  constructor(private AppHackerNewsService: AppHackerNewsService) {
    this.AppHackerNewsService.getNews().subscribe((data) => {
      console.log(data);
      var data1 = data;
      this.news = data1;
    });
  }

  ngOnInit(): void {}
  onSave($event) {
    //console.log('Save button is clicked!', $event);
    console.log('button is clicked!', $event.target.id);
    var list = document.getElementById($event.target.id);
    list.removeChild(list.childNodes[0]);
  }
}

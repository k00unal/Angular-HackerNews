import { AppHackerNewsService } from '../../services/app-hacker-news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.scss'],
})
export class NewsFeedsComponent implements OnInit {
  hideme = {};
  news = [];

  constructor(private AppHackerNewsService: AppHackerNewsService) {
    this.AppHackerNewsService.getNews().subscribe((data) => {
      let data2 = data['hits'].map((data) => data);
      console.log('hitsArray', data2);
      this.news = data2;
    });
  }

  ngOnInit(): void {}
  onSave($event) {
    //console.log('Save button is clicked!', $event);
    //console.log('button is clicked!', $event.target.id);
    var list = document.getElementById($event.target.id);
    list.removeChild(list.childNodes[0]);
  }
}

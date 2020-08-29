import { AppHackerNewsService } from '../../services/app-hacker-news.service';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private NewsService: AppHackerNewsService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public isBrowser: boolean;

  hideme = {};
  news = [];
  fullData = {};
  votes = [];
  Ids = [];
  chart = [];
  currentPage: number;
  lineChartData: ChartDataSets[] = [{ data: this.votes, label: 'Votes' }];

  lineChartLabels: Label[] = this.Ids;

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'VOTES',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'IDS',
          },
        },
      ],
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#ff6600',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    this.loadData(false);
  }

  loadData(fromPagination): void {
    if (!fromPagination && localStorage.getItem('news')) {
      this.news = JSON.parse(localStorage.getItem('news'));
      this.currentPage = JSON.parse(localStorage.getItem('currentPage'));

      this.news.forEach((y) => {
        this.Ids.push(y.objectID);
        this.votes.push(y.points);
      });
    } else {
      this.NewsService.getNews(
        this.currentPage ? this.currentPage : 0
      ).subscribe((news: News) => {
        this.fullData = news;
        this.news = news.hits;
        this.currentPage = news.page;
        localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
        console.log(this.fullData);
        console.log(this.news);
        console.log(this.currentPage);
        localStorage.setItem('news', JSON.stringify(this.news));

        this.news.forEach((y) => {
          // console.log(y.objectID);
          // console.log(y.points);
          this.Ids.push(y.objectID);
          this.votes.push(y.points);
        });
        this.lineChartData[0].data = this.votes;
        this.lineChartLabels = this.Ids;
        this.lineChartData = this.lineChartData.slice();
        this.lineChartLabels = this.lineChartLabels.slice();
      });
    }
  }

  hideMe(index) {
    this.news.splice(index, 1);
    if (this.news.length === 0) {
      return this.nextData();
    }
    localStorage.setItem('news', JSON.stringify(this.news));
    this.lineChartData[0].data.splice(index, 1);
    this.lineChartLabels.splice(index, 1);
    this.lineChartData = this.lineChartData.slice();
    this.lineChartLabels = this.lineChartLabels.slice();
  }
  nextData(): void {
    this.currentPage = this.currentPage + 1;
    //console.log(this.currentPage);
    this.Ids = [];
    this.votes = [];
    this.loadData(true);
  }
  prevData(): void {
    this.currentPage = this.currentPage - 1;
    console.log('previous data', this.Ids);
    this.Ids = [];
    this.votes = [];
    this.loadData(true);
  }
  castVote(index): void {
    this.news[index].points++;
    localStorage.setItem('news', JSON.stringify(this.news));
    this.lineChartData[0].data[index] = this.news[index].points;
    this.lineChartData = this.lineChartData.slice();
    this.lineChartLabels = this.lineChartLabels.slice();
  }
}

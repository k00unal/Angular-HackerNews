import { AppHackerNewsService } from '../../services/app-hacker-news.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LocalStorageService } from './../../services/local-storage.service';

import { News } from '../../interface/news';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.scss'],
})
export class NewsFeedsComponent implements OnInit {
  lineChartData = [];
  lineChartLabels = [];
  lineChartOptions = {};
  lineChartColors = [];
  lineChartLegend: boolean;
  lineChartType = [];
  lineChartPlugins: string;

  localStorageChanges$ = this.localStorageService.changes$;

  constructor(
    private NewsService: AppHackerNewsService,
    private localStorageService: LocalStorageService
  ) {}

  hideme = {};
  news = [];
  fullData = {};
  votes = [];
  Ids = [];
  chart = [];
  currentPage: number;
  //bookmarkpage: number;

  @Output() outputVotes: EventEmitter<any> = new EventEmitter();
  @Output() outputId: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.loadData(false);
    this.emitdata();
  }

  loadData(fromPagination): void {
    if (!fromPagination && this.localStorageService.get('news')) {
      // this.news = JSON.parse(localStorage.getItem('news'));
      // this.currentPage = JSON.parse(localStorage.getItem('currentPage'));
      this.news = this.localStorageService.get('news');
      this.currentPage = this.localStorageService.get('currentPage');

      this.news.forEach((y) => {
        this.Ids.push(y.objectID);
        this.votes.push(y.points);
      });
      console.log('localstorage-id', this.Ids);
      console.log('localstorage-votes', this.votes);
    } else {
      this.NewsService.getNews(
        this.currentPage ? this.currentPage : 0
      ).subscribe((news: News) => {
        this.fullData = news;
        this.news = news.hits;
        this.currentPage = news.page;
        this.localStorageService.set('currentPage', this.currentPage);
        this.localStorageService.set('news', this.news);
        // localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
        // localStorage.setItem('news', JSON.stringify(this.news));
        console.log(this.fullData);
        console.log(this.news);
        console.log(this.currentPage);

        this.news.forEach((y) => {
          // console.log(y.objectID);
          // console.log(y.points);
          this.Ids.push(y.objectID);
          this.votes.push(y.points);
        });
        // console.log('cl-id', this.Ids);
        // console.log('cl-votes', this.votes);
        // this.lineChartData[0].data = this.votes;
        // this.lineChartLabels = this.Ids;
        // this.lineChartData = this.lineChartData.slice();
        // this.lineChartLabels = this.lineChartLabels.slice();
        //this.addData();
      });
    }
  }

  hideMe(index) {
    const newId = [];
    const newVotes = [];
    this.news.splice(index, 1);
    if (this.news.length === 0) {
      return this.nextData();
    }
    //console.log('hideMe', indx);
    //localStorage.setItem('news', JSON.stringify(this.news));
    this.news.forEach((y) => {
      //console.log('hideMe', y.points);
      newId.push(y.objectID);
      newVotes.push(y.points);
    });
    // console.log('hideMe', newId);
    // console.log('hideMe', newVotes);
    this.votes = newVotes.slice(0);
    this.Ids = newId.slice(0);
    this.emitdata();
  }
  nextData(): void {
    this.currentPage = this.currentPage + 1;
    //console.log(this.currentPage);
    this.Ids = [];
    this.votes = [];
    this.emitdata();
    this.loadData(true);
  }
  prevData(): void {
    this.currentPage = this.currentPage - 1;
    //console.log('previous data', this.Ids);
    this.Ids = [];
    this.votes = [];
    this.emitdata();
    this.loadData(true);
  }
  castVote(index): void {
    const newVotes = [];
    this.news[index].points++;
    //localStorage.setItem('news', JSON.stringify(this.news));
    this.localStorageService.set('currentPage', this.currentPage);
    this.localStorageService.set('news', this.news);
    this.news.forEach((y) => {
      //console.log(y.points);
      newVotes.push(y.points);
    });
    this.votes = newVotes.slice(0);
    //console.log('castevote vote', this.votes);
    this.emitdata();
  }

  emitdata() {
    this.outputVotes.emit(this.votes);
    this.outputId.emit(this.Ids);
  }

  bookMarkData(): void {
    this.currentPage = this.localStorageService.get('savePage');
    //this.currentPage = this.bookMarkPage;
    console.log('currentPage-bookMarkData', this.currentPage);
    this.Ids = [];
    this.votes = [];
    this.emitdata();
    this.loadData(true);
  }

  // bookmark() {
  //   var pageName = this.localStorageService.set('bookmark', this.currentPage);
  //   var url_string = window.location.href;
  //   console.log(url_string);
  //   console.log(pageName);
  //   //this.addBookmark();
  // }
}

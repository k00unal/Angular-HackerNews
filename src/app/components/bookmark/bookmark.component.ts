import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LocalStorageService } from './../../services/local-storage.service';

import { Bookmark } from './../../interface/bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  @Input() currentPage: number;
  bookMarkPage: number;
  //@Input() news: [];

  @Output() bookMark = new EventEmitter<number>();

  ngOnInit(): void {
    //this.bookmarkGet();
  }

  ngOnChanges() {
    //this.bookmarkGet();
  }

  bookmark: Bookmark = {
    name: 'HackerNews',
    url: 'www.example.com',
  };

  bookmarkSet() {
    this.localStorageService.set('savePage', this.currentPage);
    //console.log('bookmark', event);
    //console.log('bookmark', this.bookmark.url);
    //this.localStorageService.set('url', this.bookmark.url);
    // alert(
    //   'Press ' +
    //     (navigator.userAgent.toLowerCase().indexOf('mac') != -1
    //       ? 'Cmd'
    //       : 'Ctrl') +
    //     '+D to bookmark this page.'
    // );
    this.bookmarkGet();
  }
  bookmarkGet() {
    //this.news = this.localStorageService.get('news');
    this.bookMarkPage = this.localStorageService.get('savePage');
    //console.log(this.bookMarkPage);
    // this.currentPage = this.bookMarkPage;
    this.bookMark.emit(this.bookMarkPage);
    console.log('bookmark get clicked', this.bookMarkPage);
    // console.log('bookmark get clicked', this.currentPage);
  }
}

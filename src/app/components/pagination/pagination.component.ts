import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() news: [];
  @Input() currentPage: number;

  @Output() prevData = new EventEmitter<number>();
  @Output() nextData = new EventEmitter<number>();
  @Output() goToPage = new EventEmitter<number>();

  //nbPages = 5;
  counter = Array;

  numberReturn(length) {
    return new Array(length);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Defaults to 0 if no query param provided.
      this.currentPage = +params['currentPage'];
      console.log('home', this.currentPage);
    });
    //this.goToPage.emit(this.currentPage);
  }

  // getPageData() {
  //   this.goToPage.emit(this.currentPage);
  // }

  prevPageData() {
    this.prevData.emit(this.currentPage);
  }
  nextPageData() {
    this.nextData.emit(this.currentPage);
  }
}

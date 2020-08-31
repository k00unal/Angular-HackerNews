import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  prevPageData() {
    this.prevData.emit(this.currentPage);
  }
  nextPageData() {
    this.nextData.emit(this.currentPage);
  }
}

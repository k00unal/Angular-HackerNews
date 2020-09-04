import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  currentPage: number;

  ngOnInit(): void {}

  inputVotes = [];
  inputId = [];

  getVotes(value) {
    this.inputVotes = value;
    //console.log('getvotes', value);
  }

  getId(value) {
    this.inputId = value;
    //console.log('getid', value);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppHackerNewsService } from '../../services/app-hacker-news.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-vote-count-charts',
  templateUrl: './vote-count-charts.component.html',
  styleUrls: ['./vote-count-charts.component.scss'],
})
export class VoteCountChartsComponent implements OnInit {
  chart = [];

  constructor(private AppHackerNewsService: AppHackerNewsService) {}

  ngOnInit() {
    this.AppHackerNewsService.getNews().subscribe((res) => {
      let points = res['hits'].map((res) => res.points);
      let id = res['hits'].map((res) => res.objectID);
      console.log('Points-data', points);
      console.log('id-data', id);
      //console.log('chartsdata', res);

      //populate  chart js
      let chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: id,
          datasets: [
            {
              data: points,
              borderColor: '#3cba9f',
              fill: false,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: true,
              },
            ],
            yAxes: [
              {
                display: true,
              },
            ],
          },
        },
      });
      this.chart = chart;
      // chart.data.datasets[0].data[2] = 50;
      // chart.update();
      //chart.ref$.subscribe(console.log);
    });
  }
  // addVotes($event) {
  //   //console.log('button clicked', $event);
  //   //console.log('button clicked', this.chart['data']);

  //   this.chart['data'].datasets[0].data[2] += 1;
  //   //this.chart.update();
  //   //this.chart['data'].map((res) => res.data)
  // }
}

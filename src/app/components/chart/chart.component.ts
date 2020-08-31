import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges {
  // votes = [];
  // Ids = [];

  // news = [];
  // currentPage: number;

  @Input() inputVotes;
  @Input() inputId;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public isBrowser: boolean;

  ngOnChanges(): void {
    // console.log('form chart.ts from feed', this.votes);
    // console.log('form chart.ts from feed', this.Ids);
    //console.log('form chart.ts inputVotes', this.inputVotes);
    //console.log('form chart.ts inputId', this.inputId);
    this.lineChartData[0].data = this.inputVotes;
    this.lineChartLabels = this.inputId;
  }

  lineChartData: ChartDataSets[] = [{ data: this.inputVotes, label: 'Votes' }];

  lineChartLabels: Label[] = this.inputVotes;

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

  // refreshData() {
  //   (this.lineChartData[0].data = this.inputVotes),
  //     (this.lineChartLabels = this.inputVotes);
  // }
}

import { Component, Input, OnInit, ViewChild, input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Colors } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as Utils from '../utils'
@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class salesChartComponent {
  @Input() linedata: any = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'line'> | undefined;

  sortedMonths: string[];
  userCounts: number[];
  buyerCounts: number[];
  sellerCounts: number[];



  constructor() {
    this.sortedMonths = []
    this.userCounts = [];
    this.buyerCounts = [];
    this.sellerCounts = [];
  }

  ngOnInit(): void {
    this.filterChartData();
    this.updateChart();
  }

  // Update the chart data when data changes
  ngOnChanges(): void {
    this.updateChart();
  }

  updateChart(): void {
    if (this.sortedMonths && this.sortedMonths.length != 0) {
      this.lineChartData.labels = this.sortedMonths;
      this.lineChartData.datasets[0].data = this.userCounts;
      this.lineChartData.datasets[1].data = this.buyerCounts;
      this.lineChartData.datasets[2].data = this.sellerCounts;
    }
  }

  filterChartData(): void {

    const userJoinedMonths: string[] = this.linedata.map((user: any) => {
      const joinedDate = new Date(user.createdAt);
      return `${joinedDate.getFullYear()}-${(joinedDate.getMonth() + 1).toString().padStart(2, '0')}-${user.role}`;
    });

    const userCountsByMonth: { [month: string]: number } = {};
    const buyerCountsByMonth: { [month: string]: number } = {};
    const sellerCountsByMonth: { [month: string]: number } = {};

    userJoinedMonths.forEach((month: string) => {
      let newmonth = month.substring(0, 7);
      userCountsByMonth[newmonth] = (userCountsByMonth[newmonth] || 0) + 1;
      if (month.includes('buyer')) {
        buyerCountsByMonth[newmonth] = (buyerCountsByMonth[newmonth] || 0) + 1;

      } else {
        sellerCountsByMonth[newmonth] = (sellerCountsByMonth[newmonth] || 0) + 1;
      }

    });
    const months: string[] = Object.keys(userCountsByMonth);
    this.sortedMonths = months.sort();
    this.userCounts = this.sortedMonths.map(month => userCountsByMonth[month]);
    this.buyerCounts = this.sortedMonths.map(month => buyerCountsByMonth[month]);
    this.sellerCounts = this.sortedMonths.map(month => sellerCountsByMonth[month]);

  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [

    ],
    datasets: [
      {
        data: [0, 0, 0],
        label: 'Count Of Users',
        fill: true,
        tension: 0.5,
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.8),

      },
      {
        data: [0, 0, 0],
        label: 'Count of Buyers',
        fill: false,
        tension: 0.5,
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        borderColor: Utils.CHART_COLORS.blue,

      },
      {
        data: [0, 0, 0],
        label: 'Count of Sellers',
        
        fill: false,
        tension: 0.5,
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        borderColor: Utils.CHART_COLORS.yellow,
        
      }
    ]

  };
  public lineChartOptions: ChartOptions<'line'> = {
      plugins: {
        legend: {
          labels: {
            color: 'white', // Set legend text color to white
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Set grid color to white with opacity
          },
          ticks: {
            color: 'white', // Set x-axis ticks color to white
          },
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Set grid color to white with opacity
          },
          ticks: {
            color: 'white', // Set y-axis ticks color to white
          },
        },
      },
    };
  public lineChartLegend = true;

  // chart.register(Colors);


}

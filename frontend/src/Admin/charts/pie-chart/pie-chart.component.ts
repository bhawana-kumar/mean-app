import { Component, Input, OnChanges, OnInit, input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'pie-chart-demo',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class pieChartComponent implements OnInit, OnChanges {
  @Input() piedata:any =  [];
  
  constructor() {

  }
  ngOnInit(): void {
   
    this.updateChart();
  }

  // Update the chart data when piedata changes
  ngOnChanges(): void {
    this.updateChart();
  }

  updateChart(): void {
    if (this.piedata && this.piedata.length >= 3) {
      this.pieChartDatasets[0].data = [this.piedata[0], this.piedata[1], this.piedata[2]];
    }
  }
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'left',
        labels: {
          color: 'white', // Set legend text color to white
        },
      }
    }
  };
  public pieChartLabels = [['Completed','Orders'], [ 'Pending', 'Orders'], ['Others']];
  public pieChartDatasets = [{
    
    data: [0,0,0]
    
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  

  

}

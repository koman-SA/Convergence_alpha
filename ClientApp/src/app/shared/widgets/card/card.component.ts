import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  
  Highcharts= Highcharts;
  chartOptions= {};

  @Input() data = [];


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin:[2, 2, 2, 2],
          height: 60,
          
      },
      accessibility: {
          description: ''
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
     
      tooltip: {
         split:true,
      },
      legend: {
        enabled: false,
      },
      exporting: {
          enabled: false,
          outside: true
      },
      xAxis:{
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOntick: false,
        tickOptions: []
      },
      yAxis:{
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOntick: false,
        tickOptions: []
      },
      credits: {
          enabled: false,
      },
      series: [{
        data: this.data,
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(() =>{
    window.dispatchEvent(new Event('resize')
    );


  }, 300);
  }

}

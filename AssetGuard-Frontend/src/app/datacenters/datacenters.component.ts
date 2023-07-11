import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-datacenters',
  templateUrl: './datacenters.component.html',
  styleUrls: ['./datacenters.component.css']
})
export class DatacentersComponent implements AfterViewInit {
  data:any;
  @ViewChild('container') chartContainer !: ElementRef;
  

  ngAfterViewInit() {
    console.log(this.chartContainer.nativeElement); // Verify the container element
    this.functionA();
  }
  

functionA(){
  this.data = fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  Highcharts.chart(this.chartContainer.nativeElement,{
    chart:{
      zooming:{
        type: 'x'
      },
    },
    title: {
      text: 'USD to EUR exchange rate over time',
      align: 'left'
  },
  xAxis: {
    type: 'datetime'
},
yAxis: {
    title: {
        text: 'Exchange rate'
    }
},
legend: {
  enabled: false
},
plotOptions:{
  area:{
    fillColor: '#aad8ff',
    marker: {
      radius: 2
    },
    lineWidth:1,
    states: {
      hover: {
          lineWidth: 1
      }
  },
  threshold: null
  }
},
series:[{
  type: 'area',
  name: 'USD to EUR',
  data: this.data
}]
  });
})
}
}

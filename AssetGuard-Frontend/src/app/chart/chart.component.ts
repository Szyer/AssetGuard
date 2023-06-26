import { Component, OnInit, AfterViewInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import * as Highcharts from 'highcharts';
import { SensorService } from '../sensor/sensor.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [DatePipe]
})
export class ChartComponent implements OnInit, OnDestroy {
  sensorData: any[] = [];
  chart!: Highcharts.Chart;
  fullView: boolean = false;
  subscription: Subscription | undefined;
  selectedType! : string 
   @Input() sensorName!:string;
  @Output() chartViewClicked: EventEmitter<void> = new EventEmitter<void>();
  constructor(private dataService: SensorService, private datePipe: DatePipe, private route : ActivatedRoute) {}
  sensor! : string;
  xText!: string;
  yText!: string;
  ngOnInit() {
    this.initializeChart(this.sensor, this.yText); 

    this.fetchCoolingData();
    // this.route.queryParams.subscribe(params => {
    //   this.selectedParameter = params['type'];
    // });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  initializeChart(sensor:any, yText:string) {
    this.chart = Highcharts.chart('chart', {
      title: {
        text: this.sensor
      },
      chart: {
        type: 'line',
        zooming: {
          singleTouch: true,
          type: 'x'
        },
        panKey: 'shift',
        panning: {
          enabled: true
        }
      },
      xAxis: {
        scrollbar: {
          enabled: true,
          liveRedraw: true
        }
      },
      yAxis: {
        title: {
          text: yText
        }
      },
      series: [
        {
          type: 'line',
          name: yText,
          data: []
        }
      ],
      plotOptions: {
        series: {
          allowPointSelect: true
        }
      }
    });
  }

  fetchTemperatureData() {
    this.sensor = 'Temperature Data'
    this.yText = 'Temperature (°C)'
    
    this.initializeChart(this.sensor, this.yText);
    this.subscription = interval(1000).subscribe(() => {
      if (this.sensorName === 'TEMPERATURE') {
        this.dataService.getTemperatureData().subscribe(
          (data: any[]) => {
            if (this.fullView) {
              this.sensorData = data; // Show all readings
            } else {
              this.sensorData = data.slice(-20); // Keep only the last 20 readings
            }
            this.updateChart();
          },
          (error) => {
            console.error('Failed to fetch temperature data:', error);
          }
        );
      }
    });
  }
  
  fetchCoolingData() {
    this.sensor = 'Cooling Data'
    this.yText = 'Cooling (°C)'
    this.initializeChart(this.sensor, this.yText);
    this.subscription = interval(1000).subscribe(() => {
      if (this.sensorName === 'COOLING') {
        this.dataService.getCoolingData().subscribe(
          (data: any[]) => {
            if (this.fullView) {
              this.sensorData = data; // Show all readings
            } else {
              this.sensorData = data.slice(-20); // Keep only the last 20 readings
            }
            this.updateChart();
          },
          (error) => {
            console.error('Failed to fetch cooling data:', error);
          }
        );
      }
    });
  }
  
  fetchVoltageData() {
    this.sensor = 'Voltage Data'
    this.yText = 'Voltage (V)'
    this.initializeChart(this.sensor, this.yText);
    this.subscription = interval(1000).subscribe(() => {
      if (this.sensorName === 'VOLTAGE') {
        this.dataService.getVoltageData().subscribe(
          (data: any[]) => {
            if (this.fullView) {
              this.sensorData = data; // Show all readings
            } else {
              this.sensorData = data.slice(-20); // Keep only the last 20 readings
            }
            this.updateChart();
          },
          (error) => {
            console.error('Failed to fetch voltage data:', error);
          }
        );
      }
    });
  }

  fetchBandwithData() {
    this.sensor = 'Bandwidth Data'
    this.yText = 'Bandwidth (MB/s)'
    this.initializeChart(this.sensor, this.yText);
    this.subscription = interval(1000).subscribe(() => {
      if (this.sensorName === 'BANDWIDTH') {
        this.dataService.getBandwidthData().subscribe(
          (data: any[]) => {
            if (this.fullView) {
              this.sensorData = data; // Show all readings
            } else {
              this.sensorData = data.slice(-20); // Keep only the last 20 readings
            }
            this.updateChart();
          },
          (error) => {
            console.error('Failed to fetch voltage data:', error);
          }
        );
      }
    });
  }

  fetchTrafficSensor() {
    this.sensor = 'Traffic Data'
    this.yText = 'Traffic (Mbps)'
    this.initializeChart(this.sensor, this.yText);
    this.subscription = interval(1000).subscribe(() => {
      if (this.sensorName === 'TRAFFIC') {
        this.dataService.getTrafficData().subscribe(
          (data: any[]) => {
            if (this.fullView) {
              this.sensorData = data; // Show all readings
            } else {
              this.sensorData = data.slice(-20); // Keep only the last 20 readings
            }
            this.updateChart();
          },
          (error) => {
            console.error('Failed to fetch traffic data:', error);
          }
        );
      }
    });
  }
  updateChart() {
    const series = this.chart.series[0];
    const xAxis = this.chart.xAxis[0];

    const temperatureValues = this.sensorData.map((item) => item.reading_value);
    const timestamps = this.sensorData.map((item) => item.reading_timestamp);

    const formattedTimestamps: string[] = timestamps.map((timestamp) => {
      const date = new Date(timestamp);
      return this.datePipe.transform(date, 'short')!;
    });

    series.setData(temperatureValues, true, false);
    xAxis.setCategories(formattedTimestamps, true);
  }

  toggleFullView() {
    this.fullView = !this.fullView;
    if (!this.fullView) {
      this.fetchTemperatureData(); // Fetch the last 20 readings
    }
    this.chartViewClicked.emit();
  }
}

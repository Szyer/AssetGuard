import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Reading } from '../sensor/Reading';
import { SensorService } from '../sensor/sensor.service';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { HighchartsChartComponent } from 'highcharts-angular';
import { Router } from '@angular/router';
import { ChartComponent } from '../chart/chart.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild(ChartComponent) chartComponent!: ChartComponent;

  sensorData: Reading[] = [];
  filteredData: Reading[] = [];
  
  latestTemperatureReading: any;
  latestCoolingReading: any;
  latestVoltageReading: any;
  latestBandwidthReading : any;
  latestTrafficReading  : any;
  sensorType: string = '';
  selectedSensorType: string | undefined;
  selectedSensorStats: any;

  
  temperatureSubscription: Subscription | undefined;
  coolingSubscription: Subscription | undefined;
  voltageSubscription: Subscription | undefined;
  bandwidthSubscription: Subscription | undefined;
  trafficSubscription: Subscription | undefined;
  selectedSensorSubscription: Subscription | undefined;
  
  sensorName!: string;
  constructor(private sensorService: SensorService,
    private router: Router) { }

    ngOnInit(): void {

        this.retrieveSensorStatus();   
        this.startTemperatureSensor();
      
    
        this.startCoolingSensor();
      
      
        this.startVoltageSensor();
      
      
        this.startBandwidthSensor();
      
      
        this.startTrafficSensor();
      
    }
    

  ngOnDestroy(): void {
    this.stopReading();
  }

  selectSensor(sensorType: string) {
    
    console.log(sensorType)
    if (sensorType === 'TEMPERATURE') {
      this.selectedSensorSubscription?.unsubscribe();
      this.selectedSensorSubscription = interval(1000).subscribe(()=>{
        this.selectedSensorStats = this.latestTemperatureReading;
      })

    } else if (sensorType === 'COOLING') {
      this.selectedSensorSubscription?.unsubscribe();
      this.selectedSensorSubscription = interval(1000).subscribe(()=>{
        this.selectedSensorStats = this.latestCoolingReading;
      })
    
    } else if (sensorType === 'VOLTAGE') {
      this.selectedSensorSubscription?.unsubscribe();
      this.selectedSensorSubscription = interval(1000).subscribe(()=>{
        this.selectedSensorStats = this.latestVoltageReading;
      })
    } else if (sensorType === 'BANDWIDTH') {
      this.selectedSensorSubscription?.unsubscribe();
      this.selectedSensorSubscription = interval(1000).subscribe(()=>{
        this.selectedSensorStats = this.latestBandwidthReading;
      })
    } else if (sensorType === 'TRAFFIC') {
      this.selectedSensorSubscription?.unsubscribe();
      this.selectedSensorSubscription = interval(1000).subscribe(()=>{
        this.selectedSensorStats = this.latestTrafficReading;
      })
    }
  
    this.selectedSensorType = sensorType;
  }
  

  startTemperatureSensor(): void {
 
    this.sensorService.startTemperatureSensor().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.temperatureSubscription = interval(5000).pipe(
    
    ).subscribe(() => {
      this.loadSensorData('TEMPERATURE');
    });
    this.selectedSensorType = 'TEMPERATURE';
    this.chartComponent.selectedType = this.selectedSensorType;
     this.chartComponent.fetchTemperatureData();
      

  }
  
  startCoolingSensor(): void {
   
    this.sensorService.startCoolingSensor().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.coolingSubscription = interval(5000).pipe(
     
    ).subscribe(() => {
      this.loadSensorData('COOLING');
    });

    this.selectedSensorType = 'COOLING';
    this.chartComponent.selectedType = this.selectedSensorType;
    this.chartComponent.fetchCoolingData();
   
  }
  
  startVoltageSensor(): void {
   
    this.sensorService.startVoltageSensor().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.voltageSubscription = interval(5000).pipe(
      
    ).subscribe(() => {
      this.loadSensorData('VOLTAGE');
    });

    this.selectedSensorType = 'VOLTAGE';
    this.chartComponent.selectedType = this.selectedSensorType;
    this.chartComponent.fetchVoltageData();
   
  }

  startBandwidthSensor(): void {
   
    this.sensorService.startBandwidthSensor().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.bandwidthSubscription = interval(5000).pipe(
      
    ).subscribe(() => {
      this.loadSensorData('BANDWIDTH');
    });

    this.selectedSensorType = 'BANDWIDTH';
    this.chartComponent.selectedType = this.selectedSensorType;
    this.chartComponent.fetchBandwithData();
    
  }

  startTrafficSensor(): void {

    this.sensorService.startTrafficSensor().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.trafficSubscription = interval(5000).pipe(
      
    ).subscribe(() => {
      this.loadSensorData('TRAFFIC');
    });
    this.selectedSensorType = 'TRAFFIC';
    this.chartComponent.selectedType = this.selectedSensorType;
    this.chartComponent.fetchTrafficSensor();
  
  }

  stopReading(): void {
 
    if (this.temperatureSubscription) {
      this.temperatureSubscription.unsubscribe();
    }
    if (this.coolingSubscription) {
      this.coolingSubscription.unsubscribe();
    }
    if (this.voltageSubscription) {
      this.voltageSubscription.unsubscribe();
    }
     if (this.bandwidthSubscription) {
      this.bandwidthSubscription.unsubscribe();
    }
    if (this.trafficSubscription) {
      this.trafficSubscription.unsubscribe();
    }
    this.sensorService.stopReading().subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
   
  }
  
  loadSensorData(sensorType: string): void {
    this.sensorService.getSensorData().subscribe(
      data => {
        this.sensorData = data;
        this.filteredData = this.sensorData.filter(sensor => sensor.sensor_type === sensorType);
        if (sensorType === 'TEMPERATURE') {
          this.latestTemperatureReading = this.filteredData[this.filteredData.length - 1];
          localStorage.setItem('latestTemperatureReading', JSON.stringify(this.latestTemperatureReading));
        } else if (sensorType === 'COOLING') {
          this.latestCoolingReading = this.filteredData[this.filteredData.length - 1];
          localStorage.setItem('latestCoolingReading', JSON.stringify(this.latestCoolingReading));
        } else if (sensorType === 'VOLTAGE') {
          this.latestVoltageReading = this.filteredData[this.filteredData.length - 1];
          localStorage.setItem('latestVoltageReading', JSON.stringify(this.latestVoltageReading));
        } else if (sensorType === 'BANDWIDTH') {
          this.latestBandwidthReading = this.filteredData[this.filteredData.length - 1];
          localStorage.setItem('latestBandwidthReading', JSON.stringify(this.latestBandwidthReading));
        } else if (sensorType === 'TRAFFIC') {
          this.latestTrafficReading = this.filteredData[this.filteredData.length - 1];
          localStorage.setItem('latestTrafficReading', JSON.stringify(this.latestTrafficReading));
        }
      },
      error => console.log(error)
    );
  }
  

  // viewChart(type: string){
  //     this.router.navigate(['/chart'], { queryParams: { param: type } });
  //     console.log("sample text:" +type);
  // }
 private retrieveSensorStatus() {


    // Retrieve latest readings from localStorage
    this.latestTemperatureReading = JSON.parse(localStorage.getItem('latestTemperatureReading') || 'null');
    this.latestCoolingReading = JSON.parse(localStorage.getItem('latestCoolingReading') || 'null');
    this.latestVoltageReading = JSON.parse(localStorage.getItem('latestVoltageReading') || 'null');
    this.latestBandwidthReading = JSON.parse(localStorage.getItem('latestBandwidthReading') || 'null');
    this.latestTrafficReading = JSON.parse(localStorage.getItem('latestTrafficReading') || 'null');
  }
}


  
  
  

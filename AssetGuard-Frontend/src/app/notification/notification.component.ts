import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SensorService } from '../sensor/sensor.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
   
  @Input() latestTemperatureReading: any;
  @Input() latestCoolingReading: any;
  @Input() latestVoltageReading: any;
  @Input() latestBandwidthReading: any;
  @Input() latestTrafficReading: any;

  constructor(private sensorService:SensorService) {}

  ngOnInit(){

  
    //this.home.retrieveSensorStatus();   
        
      
    
    console.log(this.latestTemperatureReading);



  }
}

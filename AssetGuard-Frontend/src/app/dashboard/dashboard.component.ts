import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
 
    data = [
        {
            cn: 'Yemen',
            color: '#e3eaa7',
            info: 'Yemen is main datacenter.'
        },
        {
            cn: 'Brazil',
            color: '#dac292',
            info: 'Data is coming from La Reunion.'
        },
        {
            cn: 'France',
            color: '#f18973',
            info: 'Data is coming from Java.'
        },
        {
            cn: 'United Kingdom',
            color: '#618685',
            info: 'Data is coming from Java.'
        },
        {
            cn: 'Indonesia',
            color: '#d96459',
            info: 'Data is coming from Yemen.'
        },
        {
            cn: 'Amsterdam',
            color: '#cab577',
            info: 'Data is coming from Java.'
        },
        {
            cn: 'Guyane',
            color: '#87bdd8',
            info: 'Data is coming from France.'
        },
        {
            cn: 'La Reunion',
            color: '#c0ffd5',
            info: 'Data is coming from Yemen.'
        },
        {
            cn: 'India',
            color: '#c0ffd5',
            info: 'Data is coming from Yemen.'
        }
    ];

}
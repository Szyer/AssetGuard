import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as proj4 from 'proj4';

//import MapModule from 'highcharts/modules/map';
import worldMap from '@highcharts/map-collection/custom/world.topo.json';
// import proj4 from 'proj4';

//import { Options } from "highcharts";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
    @ViewChild('container') chartContainer !: ElementRef;

    topology: any;
    chartOptions !: Highcharts.Options;
    data1: any;



    ngAfterViewInit() {
        // this.topology = fetch(
        //     'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
        // ).then(response => response.json());
        // console.log(this.topology)
        // console.table(this.topology);

        this.functionA();

    }
    //console.log(topology);

    //Highcharts: typeof Highcharts = Highcharts;
    //chartConstructor = 'mapChart';
    functionA() {

        this.data1 = [
            {
                'hc-key': 'ye',
                color: '#e3eaa7',
                info: 'Yemen is main datacenter.'
            },
            {
                'hc-key': 'br',
                color: '#dac292',
                info: 'Data is coming from La Reunion.'
            },
            {
                'hc-key': 'fr',
                color: '#f18973',
                info: 'Data is coming from Java.'
            },
            {
                'hc-key': 'gb',
                color: '#618685',
                info: 'Data is coming from Java.'
            },
            {
                'hc-key': 'id',
                color: '#d96459',
                info: 'Data is coming from Yemen.'
            },
            {
                'hc-key': 'nl',
                color: '#cab577',
                info: 'Data is coming from Java.'
            },
            {
                'hc-key': 'gu',
                color: '#87bdd8',
                info: 'Data is coming from France.'
            },
            {
                'hc-key': 're',
                color: '#c0ffd5',
                info: 'Data is coming from Yemen.'
            },
            {
                'hc-key': 'in',
                color: '#c0ffd5',
                info: 'Data is coming from Yemen.'
            }
        ];


        // map chart 
        Highcharts.mapChart(this.chartContainer.nativeElement, {

            chart: {
               map: worldMap,
               animation: true,
               backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#ffffff'], // White color
                    [1, '#aad8ff']  // Water-like blue color
                ]
            },
                //proj4: proj4,
            },
            title: {
                text: 'DataCenters at diferent locations'
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<b>{point.key}</b>:<br/>',
                pointFormat: '{point.info}'
            },

            mapView: {
                //projection:Animation,
            
                fitToGeometry: {
                    type: 'MultiPoint',
                    coordinates: [
                        // Alaska west
                        [-164, 54],
                        // Greenland north
                        [-35, 84],
                        // New Zealand east
                        [179, -38],
                        // Chile south
                        [-68, -55]
                    ]
                }
            },

            series: [
                {   
                    type: 'map',
                    data : this.data1,
                    keys: ['hc-key', 'color', 'info'],
                    name: 'Coffee'
                },
                

                {
                    type: 'mapline',
                     id: 'animated-lines',
                    data: [
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [48.516388, 15.552727], // Yemen
                                    [110.004444, -7.491667] // Java
                                ],
                                
                               
                            },
                           
                            color: '#666',
                            
                        },
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [48.516388, 15.552727], // Yemen
                                    [55.5325, -21.114444] // La reunion
                                ]
                            },
                            //className: 'animated-line',
                            color: '#666'
                        },
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [55.5325, -21.114444], // La reunion
                                    [-43.2, -22.9] // Brazil
                                ]
                            },
                            
                            // className: 'animated-line',
                            color: '#666'
                        },
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [48.516388, 15.552727], // Yemen
                                    [78, 21] // India
                                ]
                            },
                            //className: 'animated-line',
                            color: '#666'
                        },
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [110.004444, -7.491667], // Java
                                    [4.9, 52.366667] // Amsterdam
                                ],
                               
                            },
                            //className: 'animated-line',
                            color: '#666'
                        },
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [-3, 55], // UK
                                    [-61.030556, 14.681944] // Antilles
                                ]
                            },
                            //className: 'animated-line',
                            color: '#666'
                        },
                        {
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [2.352222, 48.856613], // Paris
                                    [-53, 4] // Guyane
                                ]
                            },

                            color: '#666'
                        }
                    ],
                    lineWidth: 2,
                    enableMouseTracking: false,
                    className: 'animated-line' 
                },
                {
                    type: 'mappoint',
                    data: this.data1,
                    keys: ['hc-key', 'color', 'info'],
                    name: 'Coffee'
                },
                {
                    type: 'mappoint',
                    color: '#333',
                    dataLabels: {
                        format: '<b>{point.name}</b><br><span style="font-weight: normal; opacity: 0.5">{point.custom.arrival}</span>',
                        align: 'left',
                        verticalAlign: 'middle'
                    },
                    data: [
                        {
                            name: 'Yemen',
                            geometry: {
                                type: 'Point',
                                coordinates: [48.516388, 15.552727] // Yemen
                            },
                            
                            dataLabels: {
                                align: 'right'
                            }
                        },
                        {
                            name: 'Java',
                            geometry: {
                                
                                type: 'Point',
                                coordinates: [110.004444, -7.491667] // Java
                            },

                        },
                        {
                            name: 'La Reunion',
                            geometry: {
                                type: 'Point',
                                coordinates: [55.5325, -21.114444] // La reunion
                            },

                        },
                        {
                            name: 'Brazil',
                            geometry: {
                                type: 'Point',
                                coordinates: [-43.2, -22.9] // Brazil
                            },

                            dataLabels: {
                                align: 'right'
                            }
                        },
                        {
                            name: 'India',
                            geometry: {
                                type: 'Point',
                                coordinates: [78, 21] // India
                            },

                        },
                        {
                            name: 'Amsterdam',
                            geometry: {
                                type: 'Point',
                                coordinates: [4.9, 52.366667] // Amsterdam
                            },

                        },
                        {
                            name: 'Antilles',
                            geometry: {
                                type: 'Point',
                                coordinates: [-61.030556, 14.681944] // Antilles
                            },

                            dataLabels: {
                                align: 'right'
                            }
                        },
                        {
                            name: 'Guyane',
                            geometry: {
                                type: 'Point',
                                coordinates: [-53, 4] // Guyane
                            },

                            dataLabels: {
                                align: 'right'
                            }
                        }
                    ],
                    enableMouseTracking: true
                },
               
            ]
        });




    }


}


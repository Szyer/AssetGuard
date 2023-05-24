package com.internship.EarlyWarningSystem.sensor;


import com.internship.EarlyWarningSystem.reading.Reading;
import com.internship.EarlyWarningSystem.reading.ReadingRepository;
import com.internship.EarlyWarningSystem.virtualSensors.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.JobKOctets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class SensorController {
    @Autowired
    private SensorService sensorService;

    @Autowired
    private ReadingRepository readingRepository;

    private VirtualBandwidthSensor bandwidthSensor;


    @PostMapping("/Sensor/{sensorType}")
    public ResponseEntity<String> startReading(@PathVariable SensorType sensorType) {
        Sensor sensor;
        switch(sensorType) {
            case TEMPERATURE:
                sensor = new Sensor("TemperatureSensor", SensorType.TEMPERATURE);
                VirtualTemperatureSensor sensor1 = new VirtualTemperatureSensor();
                sensorService.startReading(sensor,sensor1);
                break;

            case COOLING:
                sensor = new Sensor("CoolingSensor", SensorType.COOLING);
                VirtualCoolingSensor sensor2 = new VirtualCoolingSensor();
                sensorService.startReading(sensor,sensor2);
                break;

            case VOLTAGE:
                sensor = new Sensor("VoltageSensor", SensorType.VOLTAGE);
                VirtualVoltageSensor sensor3 = new VirtualVoltageSensor();
                sensorService.startReading(sensor,sensor3);
                break;

            case TRAFFIC:
                if (bandwidthSensor == null) {
                    throw new IllegalStateException("Bandwidth Sensor must be started first.");
                }
                sensor = new Sensor("TrafficSensor", SensorType.TRAFFIC);
                VirtualTrafficSensor sensor4 = new VirtualTrafficSensor(bandwidthSensor);
                sensorService.startReading(sensor,sensor4);
                break;

            case BANDWIDTH:
                sensor = new Sensor("BandwidthSensor", SensorType.BANDWIDTH);
                bandwidthSensor = new VirtualBandwidthSensor();
                sensorService.startReading(sensor, bandwidthSensor);
                break;

            default:
                throw new IllegalArgumentException("Unknown sensor type: " + sensorType);
        }

        return ResponseEntity.ok("Reading started for sensor type " + sensorType);
    }


    @PostMapping("/shutdown")
    public ResponseEntity<String> shutdown() {
        sensorService.stopReading();
        return ResponseEntity.ok("Scheduler stopped.");
    }

    @GetMapping("/readings")
    public ResponseEntity<List<Map<String, Object>>> getReadingsWithSensorInfo() {
        List<Map<String, Object>> resultList = readingRepository.getReadingsWithSensorInfo();
        return ResponseEntity.ok(resultList);
    }

    @GetMapping("/readings/temperature")
    public ResponseEntity<List<Map<String, Object>>> getTemperatureReadingValues() {
    List<Map<String, Object>> resultList = readingRepository.getTemperatureReadingValues();
    return ResponseEntity.ok(resultList);
    }

    @GetMapping("/readings/cooling")
    public ResponseEntity<List<Map<String, Object>>> getCoolingReadingValues() {
        List<Map<String, Object>> resultList = readingRepository.getCoolingReadingValues();
        return ResponseEntity.ok(resultList);
    }

    @GetMapping("/readings/bandwidth")
    public ResponseEntity<List<Map<String, Object>>> getBandwidthReadingValues() {
        List<Map<String, Object>> resultList = readingRepository.getBandwidthReadingValues();
        return ResponseEntity.ok(resultList);
    }

    @GetMapping("/readings/traffic")
    public ResponseEntity<List<Map<String, Object>>> getTrafficReadingValues() {
        List<Map<String, Object>> resultList = readingRepository.getTrafficReadingValues();
        return ResponseEntity.ok(resultList);
    }

    @GetMapping("/readings/voltage")
    public ResponseEntity<List<Map<String, Object>>> getVoltageReadingValues() {
        List<Map<String, Object>> resultList = readingRepository.getVoltageReadingValues();
        return ResponseEntity.ok(resultList);
    }

}





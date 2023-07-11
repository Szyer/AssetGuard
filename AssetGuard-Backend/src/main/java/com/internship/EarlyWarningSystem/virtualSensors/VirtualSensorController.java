package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.reading.ReadingRepository;
import com.internship.EarlyWarningSystem.sensor.SensorService;
import com.internship.EarlyWarningSystem.sensor.SensorType;
import com.internship.EarlyWarningSystem.virtualSensors.DefaultSensors.VirtualBandwidthSensor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")

public class VirtualSensorController {



    @Autowired
    private ReadingRepository readingRepository;


    @Autowired
    private VirtualSensorService virtualSensorService;

    @Autowired
    private VirtualSensorRepository virtualSensorRepository;

    private String sensorName;
//    @PostMapping("/Sensor/{sensorType}")
//    public ResponseEntity<String> startReading(@PathVariable SensorType sensorType) {
//
//    }
    @PostMapping("/addvirtualSensor")
    public ResponseEntity<String> startReading(@RequestBody VirtualSensor virtualSensor) {
        System.out.println("heating");
        virtualSensorRepository.save(virtualSensor);
        virtualSensorService.startVirtualSensor(virtualSensor);
        return ResponseEntity.ok("Reading started for sensor type " + virtualSensor.getVirtualSensorName());
    }

    @PostMapping("/shutdown")
    public ResponseEntity<String> shutdown() {
        virtualSensorService.stopReading();
        return ResponseEntity.ok("Scheduler stopped.");
    }


}

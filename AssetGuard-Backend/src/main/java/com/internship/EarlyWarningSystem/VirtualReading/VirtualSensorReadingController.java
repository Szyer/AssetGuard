package com.internship.EarlyWarningSystem.VirtualReading;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class VirtualSensorReadingController {

    @Autowired
    private VirtualSensorReadingService virtualSensorReadingService;

    @GetMapping("/getAllSensorReadings")
    public List<VirtualSensorReadingDTO> getAllReadings(){
        return virtualSensorReadingService.getAllSensorReading();
    }

    @GetMapping("/getReadingByName/{sensorName}")
    public List<VirtualSensorReadingDTO> getReadingSensorName(@PathVariable String sensorName){

        return virtualSensorReadingService.getReadingBySensorName(sensorName);
    }
}

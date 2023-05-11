package com.internship.EarlyWarningSystem.sensor;

import com.internship.EarlyWarningSystem.reading.Reading;
import com.internship.EarlyWarningSystem.reading.ReadingRepository;
import com.internship.EarlyWarningSystem.sensor.SensorRepository;
import com.internship.EarlyWarningSystem.virtualSensors.SensorAll;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.sql.Timestamp;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class SensorServiceIMPL implements SensorService {

//    private Map<SensorType, Sensor> sensors;

    @Autowired
    private ReadingRepository repository;

    @Autowired
    private SensorRepository sensorRepository;

    private ScheduledExecutorService scheduler;

    private SensorAll sensorAll;


    public void startReading(Sensor sensor, SensorAll sensorAll) {
        if (scheduler == null || scheduler.isShutdown()) {
            scheduler = Executors.newScheduledThreadPool(1);
        }
        scheduler.scheduleAtFixedRate(() -> {
            Reading reading = new Reading(sensor, sensorAll.read(), new Timestamp(System.currentTimeMillis()));
            reading.setSensor(sensor);
            sensorRepository.save(sensor);
            System.out.println(sensor.getType()+ ": " + reading.getValue());
            repository.save(reading);
        }, 0, 5, TimeUnit.SECONDS);

    }



    @Override
    public void stopReading() {
        scheduler.shutdown();
    }
}
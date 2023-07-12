package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.VirtualReading.VirtualReadingRepository;
import com.internship.EarlyWarningSystem.VirtualReading.VirtualSensorReading;
import com.internship.EarlyWarningSystem.VirtualReading.VirtualSensorReadingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
public class VirtualSensorServiceIMPL implements VirtualSensorService {

private ScheduledExecutorService scheduler;

@Autowired
private VirtualReadingRepository readingRepository;

@Autowired
private VirtualSensorRepository sensorRepository;
    @Override
    public double generateRandomValues(int minValue, int maxValue) {
        Random random = new Random();
        double randomValue = random.nextDouble() * (maxValue - minValue) + minValue;
        return randomValue;
    }




    @Override
    public void startVirtualSensor(VirtualSensor virtualSensor) {
        if (scheduler == null || scheduler.isShutdown()) {
            scheduler = Executors.newScheduledThreadPool(1);
        }
        scheduler.scheduleAtFixedRate(() -> {
            double value = generateRandomValues(virtualSensor.getMinValue(), virtualSensor.getMaxValue());
           // VirtualSensorReading reading = new VirtualSensorReading(virtualSensor.getVirtualSensorName(), value, new Timestamp(System.currentTimeMillis()));
            VirtualSensorReading reading = new VirtualSensorReading();
            reading.setSensorName(virtualSensor.getVirtualSensorName());
            reading.setValue(value);
            reading.setTimestamp(new Timestamp(System.currentTimeMillis()));
            reading.setVirtualSensor(virtualSensor);

            System.out.println("kjshfdfwdjfg "+reading);


            sensorRepository.save(virtualSensor);
            System.out.println(virtualSensor.getVirtualSensorName()+ ": " + reading.getValue());
            readingRepository.save(reading);

        }, 0, 5, TimeUnit.SECONDS);

    }
    @Override
    public List<VirtualSensorDTO> getAllSensorData(){
        List<VirtualSensor> virtualSensors = sensorRepository.findAll();
        List<VirtualSensorDTO> virtualSensorDTOS = new ArrayList<>();
        for (VirtualSensor virtualSensor : virtualSensors){
            VirtualSensorDTO virtualSensorDTO = new VirtualSensorDTO(
                    virtualSensor.getVirtualSensorName(),
                    virtualSensor.getThreshold(),
                    virtualSensor.getMinValue(),
                    virtualSensor.getMaxValue(),
                    virtualSensor.isStatus()
            );
            virtualSensorDTOS.add(virtualSensorDTO);
        }
        return virtualSensorDTOS;
    }



    @Override
    public void stopReading() {
        scheduler.shutdown();
    }
}

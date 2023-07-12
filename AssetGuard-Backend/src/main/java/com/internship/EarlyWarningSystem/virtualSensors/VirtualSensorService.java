package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.VirtualReading.VirtualSensorReading;
import com.internship.EarlyWarningSystem.VirtualReading.VirtualSensorReadingDTO;
import org.springframework.stereotype.Service;

import java.util.List;


public interface VirtualSensorService{

    public double generateRandomValues(int minValue, int maxValue);

    public void startVirtualSensor(VirtualSensor virtualSensor);

    public void stopReading();
    public List<VirtualSensorDTO> getAllSensorData();

}

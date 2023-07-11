package com.internship.EarlyWarningSystem.virtualSensors;

import org.springframework.stereotype.Service;



public interface VirtualSensorService{

    public double generateRandomValues(int minValue, int maxValue);

    public void startVirtualSensor(VirtualSensor virtualSensor);

    public void stopReading();
}

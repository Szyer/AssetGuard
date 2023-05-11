package com.internship.EarlyWarningSystem.sensor;

import com.internship.EarlyWarningSystem.virtualSensors.SensorAll;

public interface SensorService {
    public void startReading(Sensor sensor, SensorAll sensorAll);
    public void stopReading();
//    public void setSensor(String name, SensorType type);
}

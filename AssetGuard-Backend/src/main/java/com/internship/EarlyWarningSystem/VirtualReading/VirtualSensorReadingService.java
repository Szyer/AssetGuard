package com.internship.EarlyWarningSystem.VirtualReading;

import java.util.List;

public interface VirtualSensorReadingService {
    List<VirtualSensorReadingDTO> getAllSensorReading();

    List<VirtualSensorReadingDTO> getReadingBySensorName(String sensorName);
}

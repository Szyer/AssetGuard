package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.reading.Reading;
import com.internship.EarlyWarningSystem.sensor.SensorType;

public interface SensorAll {
    double read();

    String getName();

    SensorType getType();


}

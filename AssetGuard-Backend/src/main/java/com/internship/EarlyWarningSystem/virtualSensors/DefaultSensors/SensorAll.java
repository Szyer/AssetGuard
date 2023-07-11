package com.internship.EarlyWarningSystem.virtualSensors.DefaultSensors;

import com.internship.EarlyWarningSystem.reading.Reading;
import com.internship.EarlyWarningSystem.sensor.SensorType;

public interface SensorAll {
    double read();

    String getName();

    SensorType getType();


}

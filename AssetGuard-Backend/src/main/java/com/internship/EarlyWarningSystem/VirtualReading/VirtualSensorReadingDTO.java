package com.internship.EarlyWarningSystem.VirtualReading;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VirtualSensorReadingDTO {

    private String sensorName;

    private double value;

    private Timestamp timestamp;



}

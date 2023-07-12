package com.internship.EarlyWarningSystem.virtualSensors;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class VirtualSensorDTO {
    private String virtualSensorName;

    private int threshold;

    private int minValue;

    private int maxValue;

    private boolean status;
}

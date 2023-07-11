package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.VirtualReading.VirtualSensorReading;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class VirtualSensor {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int virtualSensorID;

    private String virtualSensorName;

    private int threshold;

    private int minValue;

    private int maxValue;

    private boolean status;

    @OneToMany(mappedBy = "virtualSensor")
    private List<VirtualSensorReading> readings;
}

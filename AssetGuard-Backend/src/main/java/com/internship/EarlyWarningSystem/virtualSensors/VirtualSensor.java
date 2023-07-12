package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.VirtualReading.VirtualSensorReading;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity(name = "virtualSensor")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class VirtualSensor {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int virtualSensorID;

    @Column(name = "virtualSensorName")
    private String virtualSensorName;

    @Column(name = "threshold")
    private int threshold;

    @Column(name = "minValue")
    private int minValue;

    @Column(name="maxValue")
    private int maxValue;

    @Column(name = "status")
    private boolean status;

    @OneToMany(mappedBy = "virtualSensor")
    private List<VirtualSensorReading> readings;
}

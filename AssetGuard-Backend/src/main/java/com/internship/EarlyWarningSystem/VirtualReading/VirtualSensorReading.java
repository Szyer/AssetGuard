package com.internship.EarlyWarningSystem.VirtualReading;

import com.internship.EarlyWarningSystem.virtualSensors.VirtualSensor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VirtualSensorReading {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reading_id;

    private String sensorName;

    private double value;

    private Timestamp timestamp;

    @ManyToOne
    @JoinColumn(name = "virtualSensorID", referencedColumnName = "id" , nullable = true)
    private VirtualSensor virtualSensor;
}

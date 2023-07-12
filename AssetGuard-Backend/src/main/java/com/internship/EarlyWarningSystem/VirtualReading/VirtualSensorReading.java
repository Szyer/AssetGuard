package com.internship.EarlyWarningSystem.VirtualReading;

import com.internship.EarlyWarningSystem.virtualSensors.VirtualSensor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
@Entity(name = "virtualReading")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class VirtualSensorReading {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reading_id;

    @Column(name = "sensorName")
    private String sensorName;

    @Column(name = "value")
    private double value;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @ManyToOne
    @JoinColumn(name = "virtualSensorID", referencedColumnName = "id", nullable = false)
    private VirtualSensor virtualSensor;
}

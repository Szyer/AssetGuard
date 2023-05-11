package com.internship.EarlyWarningSystem.reading;

import com.internship.EarlyWarningSystem.sensor.Sensor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "reading")
public class Reading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @ManyToOne
    @JoinColumn(name = "sensor_id", referencedColumnName = "id")
    private Sensor sensor;

    @Column(name = "value")
    private Double value;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    public Reading(Sensor sensor, Double value, Timestamp timestamp) {
        this.sensor = sensor;
        this.value = value;
        this.timestamp = timestamp;
    }



}
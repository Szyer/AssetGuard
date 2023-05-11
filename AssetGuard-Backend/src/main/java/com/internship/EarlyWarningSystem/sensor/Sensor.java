package com.internship.EarlyWarningSystem.sensor;

import com.internship.EarlyWarningSystem.reading.Reading;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "sensor")
public class Sensor{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private SensorType type;


    public Sensor(String name, SensorType type) {
        this.name = name;
        this.type = type;
    }
}

package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.reading.ReadingRepository;
import com.internship.EarlyWarningSystem.sensor.SensorType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Component
public class VirtualVoltageSensor implements SensorAll {
    private String name;
    private SensorType type;
    private ReadingRepository repository;

    private LocalDateTime lastUpdateTime = LocalDateTime.now();

    private double voltage = getRandomVoltageInRange(208, 240);

    @Override
    public double read() {
        voltage = getVoltage();
        lastUpdateTime = LocalDateTime.now();
        return voltage;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public SensorType getType() {
        return type;
    }

    public double getVoltage() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        voltage = getRandomVoltageInRange(208, 240);
        lastUpdateTime = currentDateTime;
        return voltage;
    }

    private double getRandomVoltageInRange(double minVoltage, double maxVoltage) {
        double voltageRange = maxVoltage - minVoltage;
        return minVoltage + (Math.random() * voltageRange);
    }
}

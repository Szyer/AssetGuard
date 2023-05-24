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
public class VirtualCoolingSensor implements SensorAll {
    private String name;
    private SensorType type;
    private ReadingRepository repository;

    private LocalDateTime lastUpdateTime = LocalDateTime.now();

    private double coolingTemperature = getRandomTemperatureInRange(60.0, 70.0);

    // Add a field to store the current temperature reading
    private double currentTemperature = getRandomTemperatureInRange(35.0, 45.0);

    @Override
    public double read() {
        coolingTemperature = getCoolingTemperature();
        lastUpdateTime = LocalDateTime.now();
        return coolingTemperature;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public SensorType getType() {
        return type;
    }

    public double getCoolingTemperature() {
        LocalDateTime currentDateTime = LocalDateTime.now();

        // Use the current temperature reading to adjust the cooling temperature
        double minTemperature = 60.0;
        double maxTemperature = 75.0;
        double temperatureRange = maxTemperature - minTemperature;
        double baseTemperature;

        if (currentTemperature > 42.0) {
            baseTemperature = getRandomTemperatureInRange(minTemperature, minTemperature + temperatureRange / 4);
        } else if (currentTemperature > 38.0) {
            double coolingTemperatureRange = temperatureRange / 2;
            double coolingTemperatureOffset = currentTemperature - 38.0;
            double coolingTemperatureOffsetPercent = coolingTemperatureOffset / 2.0; // scale offset to be between 0 and 1
            double coolingTemperatureOffsetAmount = coolingTemperatureOffsetPercent * coolingTemperatureRange;
            baseTemperature = getRandomTemperatureInRange(minTemperature + coolingTemperatureOffsetAmount, minTemperature + temperatureRange / 2);
        } else {
            baseTemperature = getRandomTemperatureInRange(minTemperature + temperatureRange / 2, maxTemperature);
        }

        // Add some random noise to the cooling temperature
        double noiseRange = temperatureRange * 0.1;
        double randomNoise = getRandomTemperatureInRange(-noiseRange, noiseRange);
        coolingTemperature = baseTemperature + randomNoise;

        lastUpdateTime = currentDateTime;
        return coolingTemperature;
    }

    private double getCurrentTemperature(){
        return getRandomTemperatureInRange(35.0, 45.0);
    }

    private double getRandomTemperatureInRange(double minTemperature, double maxTemperature) {
        double temperatureRange = maxTemperature - minTemperature;
        double randomNoise = -1.0 + (Math.random() * 2.5);
        return Math.max(minTemperature, Math.min(maxTemperature, minTemperature + temperatureRange * randomNoise));
    }
}

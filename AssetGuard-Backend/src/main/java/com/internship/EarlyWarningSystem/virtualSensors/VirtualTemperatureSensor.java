package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.reading.ReadingRepository;
import com.internship.EarlyWarningSystem.sensor.SensorType;

import java.time.LocalDateTime;

public class VirtualTemperatureSensor implements SensorAll {
    private String name;
    private SensorType type;
    private ReadingRepository repository;

    private LocalDateTime lastUpdateTime = LocalDateTime.now();

    private double temperature = getRandomTemperatureInRange(60.0, 80.0, 2.0);

    @Override
    public double read() {
        temperature = getTemperature();
        lastUpdateTime = LocalDateTime.now();
        return temperature;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public SensorType getType() {
        return type;
    }

    public double getTemperature() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        double temperature = getCurrentTemperature();

        double minTemperature = 35.0;
        double maxTemperature = 45.0;
        double temperatureRange = maxTemperature - minTemperature;
        double baseTemperature;

        if (temperature > 40.0) {
            baseTemperature = getRandomTemperatureInRange(minTemperature, minTemperature + temperatureRange / 4, 2.0);
        } else if (temperature > 30.0) {
            double currentTemperatureRange = temperatureRange / 2;
            double currentTemperatureOffset = temperature - 30.0;
            double currentTemperatureOffsetPercent = currentTemperatureOffset / 10.0; // scale offset to be between 0 and 1
            double currentTemperatureOffsetAmount = currentTemperatureOffsetPercent * currentTemperatureOffset;
            baseTemperature = getRandomTemperatureInRange(minTemperature + currentTemperatureOffsetAmount, minTemperature + temperatureRange / 2, 2.0);
        } else {
            baseTemperature = getRandomTemperatureInRange(minTemperature + temperatureRange / 2, maxTemperature, 2.0);
        }

        double randomNoise = getRandomTemperatureInRange(-10, 10, 3.5);
        temperature = baseTemperature + randomNoise;

        lastUpdateTime = currentDateTime;
        return temperature;
    }

    private double getCurrentTemperature() {
        // Implement your method to get the current temperature here.
        // This method should return a double value representing the current temperature.
        return getRandomTemperatureInRange(30.0, 40.0, 2.0);
    }

    private double getRandomTemperatureInRange(double minTemperature, double maxTemperature, double maxFluctuation) {
        double temperatureRange = maxTemperature - minTemperature;
        double maxDelta = maxFluctuation > temperatureRange / 2 ? temperatureRange / 2 : maxFluctuation;
        double delta = maxDelta * (2 * Math.random() - 1);
        double temperature = temperatureRange / 2 + delta;
        temperature = Math.min(maxTemperature, Math.max(minTemperature, temperature));
        return temperature;
    }
}

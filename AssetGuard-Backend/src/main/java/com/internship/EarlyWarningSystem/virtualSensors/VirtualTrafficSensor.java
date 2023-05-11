package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.sensor.SensorType;
import com.internship.EarlyWarningSystem.reading.ReadingRepository;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@NoArgsConstructor
public class VirtualTrafficSensor implements SensorAll {
    private String name;
    private SensorType type;
    private ReadingRepository repository;

    private LocalDateTime lastUpdateTime = LocalDateTime.now();

    // constant for controlling the maximum fluctuation of the value
    private final double MAX_TRAFFIC_FLUCTUATION = 100.0;

    private VirtualBandwidthSensor bandwidthSensor;

    public VirtualTrafficSensor(VirtualBandwidthSensor bandwidthSensor) {
        this.bandwidthSensor = bandwidthSensor;
    }

    @Override
    public double read() {
        // calculate the value of traffic based on bandwidth
        double bandwidth = bandwidthSensor.read();
        double maxTraffic = 1000.0;
        double baseTraffic = bandwidth / 10.0;

        // calculate the maximum allowed fluctuation of the traffic value
        double maxDelta = MAX_TRAFFIC_FLUCTUATION > baseTraffic / 2 ? baseTraffic / 2 : MAX_TRAFFIC_FLUCTUATION;
        double delta = maxDelta * (2 * Math.random() - 1);
        baseTraffic += delta;

        // limit the value of traffic within the max range
        baseTraffic = Math.min(maxTraffic, Math.max(0.0, baseTraffic));

        lastUpdateTime = LocalDateTime.now();
        return baseTraffic;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public SensorType getType() {
        return type;
    }
}

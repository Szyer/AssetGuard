package com.internship.EarlyWarningSystem.virtualSensors;

import com.internship.EarlyWarningSystem.sensor.SensorType;
import com.internship.EarlyWarningSystem.reading.ReadingRepository;

import java.time.LocalDateTime;
public class VirtualBandwidthSensor implements SensorAll {
    private String name;
    private SensorType type;
    private ReadingRepository repository;

    private LocalDateTime lastUpdateTime = LocalDateTime.now();

    // initial value for bandwidth
    private double bandwidth = getRandomBandwidthInRange(1000.0, 5000.0);

    // constant for controlling the maximum fluctuation of the value
    private final double MAX_BANDWIDTH_FLUCTUATION = 1000.0;

    @Override
    public double read() {
        // update the value of bandwidth
        bandwidth = getBandwidth();

        lastUpdateTime = LocalDateTime.now();
        return bandwidth;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public SensorType getType() {
        return type;
    }

    private double getBandwidth() {
        double minBandwidth = 500.0;
        double maxBandwidth = 7000.0;
        double bandwidthRange = maxBandwidth - minBandwidth;
        double baseBandwidth = bandwidth;

        // calculate the maximum allowed fluctuation of the bandwidth value
        double maxDelta = MAX_BANDWIDTH_FLUCTUATION > bandwidthRange / 2 ? bandwidthRange / 2 : MAX_BANDWIDTH_FLUCTUATION;
        double delta = maxDelta * (2 * Math.random() - 1);
        baseBandwidth += delta;

        // limit the value of bandwidth within the min/max range
        baseBandwidth = Math.min(maxBandwidth, Math.max(minBandwidth, baseBandwidth));

        return baseBandwidth;
    }

    private double getRandomBandwidthInRange(double minBandwidth, double maxBandwidth) {
        double bandwidthRange = maxBandwidth - minBandwidth;
        double randomNoise = -1.0 + (Math.random() * 1.5);
        return Math.max(minBandwidth, Math.min(maxBandwidth, minBandwidth + bandwidthRange * randomNoise));
    }
}
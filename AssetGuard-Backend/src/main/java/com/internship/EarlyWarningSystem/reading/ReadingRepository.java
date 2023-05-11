package com.internship.EarlyWarningSystem.reading;

import com.internship.EarlyWarningSystem.sensor.SensorType;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@EnableJpaRepositories
public interface ReadingRepository extends JpaRepository<Reading, Integer> {
    List<Reading> findAllBySensorType(SensorType sensorType);

    @Query("SELECT r.id as reading_id, r.value as reading_value, r.timestamp as reading_timestamp, " +
            "s.id as sensor_id, s.name as sensor_name, s.type as sensor_type " +
            "FROM reading r JOIN r.sensor s")
    List<Map<String, Object>> getReadingsWithSensorInfo();
    @Query("SELECT r.value as reading_value, r.timestamp as reading_timestamp FROM reading r JOIN r.sensor s WHERE s.type = 'TEMPERATURE'")
    List<Map<String, Object>> getTemperatureReadingValues();


    @Query("SELECT r.value as reading_value, r.timestamp as reading_timestamp FROM reading r JOIN r.sensor s WHERE s.type = 'VOLTAGE'")
    List<Map<String, Object>> getVoltageReadingValues();

    @Query("SELECT r.value as reading_value, r.timestamp as reading_timestamp FROM reading r JOIN r.sensor s WHERE s.type = 'COOLING'")
    List<Map<String, Object>> getCoolingReadingValues();

    @Query("SELECT r.value as reading_value, r.timestamp as reading_timestamp FROM reading r JOIN r.sensor s WHERE s.type = 'BANDWIDTH'")
    List<Map<String, Object>> getBandwidthReadingValues();

    @Query("SELECT r.value as reading_value, r.timestamp as reading_timestamp FROM reading r JOIN r.sensor s WHERE s.type = 'TRAFFIC'")
    List<Map<String, Object>> getTrafficReadingValues();


//    @Query("SELECT r.id as reading_id, r.value as reading_value, r.timestamp as reading_timestamp, " +
//            "s.id as sensor_id, s.name as sensor_name, s.type as sensor_type " +
//            "FROM Reading r JOIN r.sensor s WHERE s.type = 'TEMPERATURE'")
//    List<Map<String, Object>> getTemperatureReadingsWithSensorInfo();


}

    package com.internship.EarlyWarningSystem.VirtualReading;

    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.data.jpa.repository.Query;
    import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
    import org.springframework.data.repository.query.Param;
    import org.springframework.stereotype.Repository;

    import java.util.List;
    import java.util.Map;

    @EnableJpaRepositories
    @Repository
    public interface VirtualReadingRepository extends JpaRepository<VirtualSensorReading, Integer> {
        @Query("SELECT r.value as reading_value, r.timestamp as reading_timestamp FROM virtualReading r JOIN r.virtualSensor s WHERE s.virtualSensorName = :virtualSensorName")
        List<Map<String, Object>> getVirtualSensorReadingValues(@Param("virtualSensorName") String virtualSensorName);
        //List<VirtualSensorReading> findAllBySensorName(String sensorName);

    }


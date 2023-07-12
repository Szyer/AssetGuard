package com.internship.EarlyWarningSystem.VirtualReading;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VirtualSensorReadingServiceIMPL implements VirtualSensorReadingService{

    @Autowired
    private VirtualReadingRepository virtualReadingRepository;

    @Override
    public List<VirtualSensorReadingDTO> getAllSensorReading() {
        List<VirtualSensorReading> virtualSensorReadings = virtualReadingRepository.findAll();
        List<VirtualSensorReadingDTO> virtualSensorReadingDTOS = new ArrayList<>();

        for (VirtualSensorReading virtualSensorReading : virtualSensorReadings){
            VirtualSensorReadingDTO virtualSensorReadingDTO = new VirtualSensorReadingDTO(
                    virtualSensorReading.getSensorName(),
                    virtualSensorReading.getValue(),
                    virtualSensorReading.getTimestamp()
            );
            virtualSensorReadingDTOS.add(virtualSensorReadingDTO);
        }
        return virtualSensorReadingDTOS;
    }


    //Added RestAPi

    //Aded tanamy ;msjfjd
    @Override
    public List<VirtualSensorReadingDTO> getReadingBySensorName(String sensorName) {
        List<VirtualSensorReading> virtualSensorReadings = virtualReadingRepository.findAll();
        List<VirtualSensorReadingDTO> virtualSensorReadingDTOS = new ArrayList<>();


        for (VirtualSensorReading virtualSensorReading : virtualSensorReadings){


            if(virtualSensorReading.getSensorName().equals(sensorName)){
                //System.out.println("inside if" + virtualSensorReading.getSensorName());
                VirtualSensorReadingDTO virtualSensorReadingDTO = new VirtualSensorReadingDTO(
                        virtualSensorReading.getSensorName(),
                        virtualSensorReading.getValue(),
                        virtualSensorReading.getTimestamp()
                );

                virtualSensorReadingDTOS.add(virtualSensorReadingDTO);

            }

        }
        return virtualSensorReadingDTOS;
    }
}

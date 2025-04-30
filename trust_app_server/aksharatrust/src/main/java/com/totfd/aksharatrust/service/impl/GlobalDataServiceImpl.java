package com.totfd.aksharatrust.service.impl;

import com.totfd.aksharatrust.dto.GlobalDataDto;
import com.totfd.aksharatrust.entity.GlobalData;
import com.totfd.aksharatrust.mapper.GlobalDataMapper;
import com.totfd.aksharatrust.repository.GlobalDataRepository;
import com.totfd.aksharatrust.service.GlobalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GlobalDataServiceImpl implements GlobalDataService {

    @Autowired
    GlobalDataRepository globalDataRepository;

    @Override
    public List<GlobalDataDto> getAllGlobalData() {
        // GlobalData globalData = new GlobalData();

        List<GlobalData> globalDataList = globalDataRepository.findAll();

        List<GlobalDataDto> globalDataDtoList = new ArrayList<>();

        for (GlobalData globalData : globalDataList) {
            globalDataDtoList.add(GlobalDataMapper.toDto(globalData));
        }

        return globalDataDtoList;

    }

    @Override
    public GlobalDataDto getGlobalDataById(Long id) {
        GlobalData globalData = globalDataRepository.findById(id).orElseThrow(() -> new RuntimeException("No Data found with this Id " + id));
        return GlobalDataMapper.toDto(globalData);
    }

    @Override
    public GlobalDataDto updateGlobalData(GlobalData globalData, Long id) {
        GlobalData existingGlobalData = globalDataRepository.findById(id).orElseThrow(() -> new RuntimeException("No Data found with this Id " + id));
        existingGlobalData.setDataKey(globalData.getDataKey());
        existingGlobalData.setDataValue(globalData.getDataValue());
        globalDataRepository.save(existingGlobalData);
        return GlobalDataMapper.toDto(existingGlobalData);
    }

    @Override
    public GlobalDataDto createGlobalData(GlobalData globalData) {
        GlobalData savedGlobalData = globalDataRepository.save(globalData); 
        return GlobalDataMapper.toDto(savedGlobalData);
    }
}

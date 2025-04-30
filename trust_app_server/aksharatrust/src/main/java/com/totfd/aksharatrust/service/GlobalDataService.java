package com.totfd.aksharatrust.service;

import com.totfd.aksharatrust.dto.GlobalDataDto;
import com.totfd.aksharatrust.entity.GlobalData;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public interface GlobalDataService {

	List<GlobalDataDto> getAllGlobalData();

	GlobalDataDto getGlobalDataById(Long id);

	GlobalDataDto updateGlobalData(GlobalData globalData, Long id);

	GlobalDataDto createGlobalData(GlobalData globalData);

}

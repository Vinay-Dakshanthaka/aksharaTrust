package com.totfd.aksharatrust.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.totfd.aksharatrust.entity.GlobalData;
import com.totfd.aksharatrust.repository.GlobalDataRepository;

@Service
public class GlobalDataService {

	@Autowired
	GlobalDataRepository globalDataRepository;
	
	public GlobalData saveGlobalData(GlobalData globalData) {
		
		GlobalData savedData = globalDataRepository.save(globalData);
		
		return savedData;
		
	}
}

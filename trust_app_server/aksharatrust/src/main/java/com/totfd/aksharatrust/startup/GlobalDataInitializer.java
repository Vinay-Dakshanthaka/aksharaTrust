package com.totfd.aksharatrust.startup;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.totfd.aksharatrust.entity.GlobalData;
import com.totfd.aksharatrust.repository.GlobalDataRepository;

@Component
public class GlobalDataInitializer implements ApplicationRunner{
	
	@Autowired
	GlobalDataRepository globalDataRepository;  

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Global data fields creation ");
		List<GlobalData> defaultSetting = List.of(
					new GlobalData("app_name", "", "text"),
				 	new GlobalData("tagline", "", "text"),
		            new GlobalData("logo_url", "", "image"),
		            new GlobalData("contact_email", "", "email"),
		            new GlobalData("contact_phone", "", "text"),
		            new GlobalData("facebook", "", "url"),
		            new GlobalData("instagram", "", "url"),
		            new GlobalData("youtube", "", "url"),
		            new GlobalData("twitter", "", "url"),
		            new GlobalData("linkedin", "", "url")
				);
		
		for(GlobalData setting : defaultSetting) {
			globalDataRepository.findByDataKey(setting.getDataKey()).orElseGet(()->globalDataRepository.save(setting));
		}
		
	}

}

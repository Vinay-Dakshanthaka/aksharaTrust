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
		System.out.println("Creating Deafault Global data fields ");
		List<GlobalData> defaultSetting = List.of(
				//To create necessary fields on the app start 
					new GlobalData("app_name", "", "text"),
				 	new GlobalData("tagline", "", "text"),
				 	
				 	new GlobalData("home_about_our_vision", "", "text"),
				 	new GlobalData("home_about_our_mission", "", "text"),
				 	new GlobalData("home_about_our_beneficiaries", "", "text"),
				 	new GlobalData("home_about_exist_reason", "", "text"),
				 	
				 	new GlobalData("home_programs_scholarship_card", "", "text"),
				 	new GlobalData("home_programs_school_support_card", "", "text"),
				 	new GlobalData("home_programs_vocational_training_card", "", "text"),
				 	new GlobalData("home_programs_brief_description", "", "text"),
				 	
//				 	new GlobalData("about_our_vision_and_mission_1", "", "text"),
//				 	new GlobalData("about_our_vision_and_mission_2", "", "text"),
//				 	new GlobalData("about_our_vision_and_mission_3", "", "text"),
//				 	
//				 	new GlobalData("about_who_are_our_beneficiaries", "", "text"),
//				 	new GlobalData("about_why_do_we_exist", "", "text"),
				 	new GlobalData("address", "", "text"),
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

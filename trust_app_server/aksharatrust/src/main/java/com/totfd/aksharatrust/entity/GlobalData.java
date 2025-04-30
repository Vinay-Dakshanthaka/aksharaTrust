package com.totfd.aksharatrust.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GlobalData {
	

	public GlobalData(String dataKey, String dataValue, String type) {
		super();
		this.dataKey = dataKey;
		this.dataValue = dataValue;
		this.type = type;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	//	Storing the data in key value pair 
	// e.g. "app_name", "logo_url", "contact_email", etc. 
	@Column(name = "data_key", nullable = false, unique = true)
	private String dataKey;

	@Column(name = "data_value",length = 5000)
	private String dataValue;

    // e.g. "text", "image", "url", "email", etc.
    private String type; 

}

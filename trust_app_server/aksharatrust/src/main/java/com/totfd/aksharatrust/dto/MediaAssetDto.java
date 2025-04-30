package com.totfd.aksharatrust.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MediaAssetDto {

	private Long id;
	
	private String category;
	
	private String imageUrl;
	
	private String eventName;
	
	private String description;
	
	private String name;
	
	private String role;
	
	private String qualification;

	@Builder.Default
	private boolean isVisible = true;
}

package com.totfd.aksharatrust.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MediaAsset {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String category;
	
	private String imageUrl;
	
	private String eventName;

	@Column(length = 5000)
	private String description;
	
	private String name;
	
	private String role;
	
	private String qualification;

	private boolean isVisible;
	
	
}

package com.totfd.aksharatrust.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.totfd.aksharatrust.entity.GlobalData;

public interface GlobalDataRepository extends JpaRepository<GlobalData, Long>{
	
	Optional<GlobalData> findByDataKey(String dataKey);

}

package com.totfd.aksharatrust.repository;

import com.totfd.aksharatrust.entity.MediaAsset;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MediaAssetRepository extends JpaRepository<MediaAsset, Long> {
    List<MediaAsset> findByCategory(String category);

    List<MediaAsset> findByCategoryAndIsVisibleTrue(String Category);
}

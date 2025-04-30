package com.totfd.aksharatrust.service;

import com.totfd.aksharatrust.dto.MediaAssetDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface MediaService {

    MediaAssetDto saveMediAsset(MediaAssetDto mediaAssetDto);

    List<MediaAssetDto> getAllMediaAssets();

    List<MediaAssetDto> getMediaAssetsByCategory(String category);

    boolean updateVisibility(Long id, boolean isVisible);

    String uploadImage(MultipartFile file, String category) throws IOException;

    String uploadImage(MultipartFile file, String category,
                       String eventName,
                       String description,
                       String name,
                       String role,
                       String qualification) throws IOException;
}

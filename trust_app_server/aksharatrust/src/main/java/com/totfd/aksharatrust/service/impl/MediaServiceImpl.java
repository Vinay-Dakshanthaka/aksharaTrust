package com.totfd.aksharatrust.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.totfd.aksharatrust.dto.MediaAssetDto;
import com.totfd.aksharatrust.entity.MediaAsset;
import com.totfd.aksharatrust.mapper.MediaAssetMapper;
import com.totfd.aksharatrust.repository.MediaAssetRepository;
import com.totfd.aksharatrust.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MediaServiceImpl implements MediaService {

    @Autowired
    private MediaAssetRepository mediaAssetRepository;

    @Autowired
    private AmazonS3 amazonS3;

    @Override
    public MediaAssetDto saveMediAsset(MediaAssetDto mediaAssetDto) {
        MediaAsset mediaAsset = MediaAssetMapper.toEntity(mediaAssetDto);
        MediaAsset saved = mediaAssetRepository.save(mediaAsset);
        return MediaAssetMapper.toDto(saved);
    }

    @Override
    public List<MediaAssetDto> getAllMediaAssets() {
        return mediaAssetRepository.findAll()
                .stream()
                .map(MediaAssetMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<MediaAssetDto> getMediaAssetsByCategory(String category) {
        return mediaAssetRepository.findByCategory(category)
                .stream()
                .map(MediaAssetMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public boolean updateVisibility(Long id, boolean isVisible) {
        Optional<MediaAsset> optionalAsset = mediaAssetRepository.findById(id);
        if (optionalAsset.isPresent()) {
            MediaAsset asset = optionalAsset.get();
            asset.setVisible(isVisible);
            mediaAssetRepository.save(asset);
            System.out.println("Updated asset: " + asset.getId() + " - isVisible: " + asset.isVisible());
            return true;
        }
        return false;
    }

    @Override
    public String uploadImage(MultipartFile file, String category) throws IOException {
        return "";
    }


    @Override
    public String uploadImage(MultipartFile file, String category,
                              String eventName,
                              String description,
                              String name,
                              String role,
                              String qualification) throws IOException {

        String folderPath = "aksharaTrust/" + category + "/";
        String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
        String key = folderPath + fileName;

        InputStream inputStream = file.getInputStream();
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());

        amazonS3.putObject(new PutObjectRequest("real_estate", key, inputStream, metadata)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        String imageUrl = amazonS3.getUrl("real_estate", key).toString();

  
        MediaAsset mediaAsset = MediaAsset.builder()
                .category(category)
                .imageUrl(imageUrl)
                .eventName(eventName)
                .description(description)
                .name(name)
                .role(role)
                .qualification(qualification)
                .isVisible(true)
                .build();

        mediaAssetRepository.save(mediaAsset);

        return imageUrl;
    }

}

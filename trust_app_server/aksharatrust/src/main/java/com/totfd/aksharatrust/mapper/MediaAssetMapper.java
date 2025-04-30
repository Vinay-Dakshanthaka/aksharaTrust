package com.totfd.aksharatrust.mapper;

import com.totfd.aksharatrust.dto.MediaAssetDto;
import com.totfd.aksharatrust.entity.MediaAsset;

public class MediaAssetMapper {

    public static MediaAssetDto toDto(MediaAsset mediaAsset) {
        MediaAssetDto mediaAssetDto = new MediaAssetDto();

        mediaAssetDto.setId(mediaAsset.getId());
        mediaAssetDto.setCategory(mediaAsset.getCategory());
        mediaAssetDto.setImageUrl(mediaAsset.getImageUrl());

        mediaAssetDto.setEventName(mediaAsset.getEventName());
        mediaAssetDto.setDescription(mediaAsset.getDescription());

        mediaAssetDto.setName(mediaAsset.getName());
        mediaAssetDto.setRole(mediaAsset.getRole());
        mediaAssetDto.setQualification(mediaAsset.getQualification());

        mediaAssetDto.setVisible(mediaAsset.isVisible());

        return mediaAssetDto;

    }

    public static MediaAsset toEntity(MediaAssetDto mediaAssetDto) {
        MediaAsset mediaAsset = new MediaAsset();

        mediaAsset.setId(mediaAssetDto.getId());
        mediaAsset.setCategory(mediaAssetDto.getCategory());
        mediaAsset.setImageUrl(mediaAssetDto.getImageUrl());
        mediaAsset.setDescription(mediaAssetDto.getDescription());
        mediaAsset.setName(mediaAssetDto.getName());
        mediaAsset.setRole(mediaAssetDto.getRole());
        mediaAsset.setQualification(mediaAssetDto.getQualification());

        mediaAsset.setVisible(mediaAssetDto.isVisible());

        return mediaAsset;
    }

}

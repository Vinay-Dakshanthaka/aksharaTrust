package com.totfd.aksharatrust.controller;

import com.totfd.aksharatrust.dto.MediaAssetDto;
import com.totfd.aksharatrust.entity.ResponseStructure;
import com.totfd.aksharatrust.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/media")
//@CrossOrigin(origins = "*")
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @GetMapping("/all")
    public ResponseEntity<ResponseStructure<List<MediaAssetDto>>> getAllMediaAssets() {
        ResponseStructure<List<MediaAssetDto>> response = new ResponseStructure<>();
        response.setCode(HttpStatus.OK.value());
        response.setMessage("All media assets fetched successfully");
        response.setData(mediaService.getAllMediaAssets());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<ResponseStructure<List<MediaAssetDto>>> getByCategory(@PathVariable String category) {
        ResponseStructure<List<MediaAssetDto>> response = new ResponseStructure<>();
        response.setCode(HttpStatus.OK.value());
        response.setMessage("Media assets fetched for category: " + category);
        response.setData(mediaService.getMediaAssetsByCategory(category));
        return ResponseEntity.ok(response);
    }

    @PostMapping("/upload")
    public ResponseEntity<ResponseStructure<String>> uploadImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("category") String category,
            @RequestParam(value = "eventName", required = false) String eventName,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "role", required = false) String role,
            @RequestParam(value = "qualification", required = false) String qualification
    ) throws IOException {

        String url = mediaService.uploadImage(file, category, eventName, description, name, role, qualification);

        ResponseStructure<String> response = new ResponseStructure<>();
        response.setCode(HttpStatus.CREATED.value());
        response.setMessage("Image uploaded and saved successfully");
        response.setData(url);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/visibility/{id}")
    public ResponseEntity<ResponseStructure<String>> updateVisibility(
            @PathVariable Long id,
            @RequestParam("isVisible") boolean isVisible) {

        boolean updated = mediaService.updateVisibility(id, isVisible);

        ResponseStructure<String> response = new ResponseStructure<>();
        if (updated) {
            response.setCode(HttpStatus.OK.value());
            response.setMessage("Visibility updated successfully");
            response.setData("Asset visibility set to: " + isVisible);
            return ResponseEntity.ok(response);
        } else {
            response.setCode(HttpStatus.NOT_FOUND.value());
            response.setMessage("Asset not found");
            response.setData(null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }
}

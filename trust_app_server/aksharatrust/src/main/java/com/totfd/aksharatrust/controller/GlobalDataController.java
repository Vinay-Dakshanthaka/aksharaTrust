package com.totfd.aksharatrust.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.totfd.aksharatrust.dto.GlobalDataDto;
import com.totfd.aksharatrust.entity.GlobalData;
import com.totfd.aksharatrust.entity.ResponseStructure;
import com.totfd.aksharatrust.mapper.GlobalDataMapper;
import com.totfd.aksharatrust.service.GlobalDataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/api/global-data")
@CrossOrigin(origins = "*")
public class GlobalDataController {

    @Autowired
    private GlobalDataService globalDataService;

    @GetMapping("/all")
    public ResponseEntity<ResponseStructure<List<GlobalDataDto>>> getGlobalData(){
        ResponseStructure<List<GlobalDataDto>> responseStructure = new ResponseStructure<>();
        responseStructure.setCode(HttpStatus.OK.value());
        responseStructure.setMessage("Global Data Fetched Successfully");
        responseStructure.setData(globalDataService.getAllGlobalData());
        return ResponseEntity.ok(responseStructure);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseStructure<GlobalDataDto>> getGlobalDataById(@PathVariable Long id){
        ResponseStructure<GlobalDataDto> responseStructure = new ResponseStructure<>();
        responseStructure.setCode(HttpStatus.OK.value());
        responseStructure.setMessage("Global Data Fetched Successfully");
        responseStructure.setData(globalDataService.getGlobalDataById(id));
        return ResponseEntity.ok(responseStructure);
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseStructure<GlobalDataDto>> createGlobalData(@RequestBody GlobalDataDto globalDataDto){
        GlobalData globalData = GlobalDataMapper.toEntity(globalDataDto);
        ResponseStructure<GlobalDataDto> responseStructure = new ResponseStructure<>();
        responseStructure.setCode(HttpStatus.CREATED.value());
        responseStructure.setMessage("Global Data Created Successfully");
        responseStructure.setData(globalDataService.createGlobalData(globalData));
        return ResponseEntity.ok(responseStructure);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseStructure<GlobalDataDto>> updateGlobalData(@PathVariable Long id, @RequestBody GlobalDataDto globalDataDto){
        GlobalData globalData = GlobalDataMapper.toEntity(globalDataDto);
        ResponseStructure<GlobalDataDto> responseStructure = new ResponseStructure<>();
        responseStructure.setCode(HttpStatus.OK.value());
        responseStructure.setMessage("Global Data Updated Successfully");
        responseStructure.setData(globalDataService.updateGlobalData(globalData, id));
        return ResponseEntity.ok(responseStructure);
    }   
}

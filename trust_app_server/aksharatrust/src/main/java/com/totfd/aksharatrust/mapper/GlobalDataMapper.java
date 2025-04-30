package com.totfd.aksharatrust.mapper;

import com.totfd.aksharatrust.dto.GlobalDataDto;
import com.totfd.aksharatrust.entity.GlobalData;

import java.util.List;
import java.util.Optional;

public class GlobalDataMapper {
//    public static GlobalDataDto toDto(Optional<GlobalData> globalData){
//        GlobalDataDto globalDataDto = new GlobalDataDto();
//        globalDataDto.setId(globalDataDto.getId());
//        globalDataDto.setDataKey(globalDataDto.getDataKey());
//        globalDataDto.setDataValue(globalDataDto.getDataValue());
//        globalDataDto.setDataKey(globalDataDto.getDataKey());
//
//        return globalDataDto;
//    }

    public static GlobalDataDto toDto(GlobalData globalData) {
        GlobalDataDto globalDataDto = new GlobalDataDto();
        globalDataDto.setId
                (Math.toIntExact(globalData.getId()));
        globalDataDto.setDataKey(globalData.getDataKey());
        globalDataDto.setDataValue(globalData.getDataValue());
        globalDataDto.setType(globalData.getType());
        return globalDataDto;
    }

//    public static GlobalDataDto toDto(List<GlobalData> globalDataList) {
//        GlobalDataDto globalDataDto = new GlobalDataDto();
//        // If there are items in the list, use the first one
//        if (!globalDataList.isEmpty()) {
//            GlobalData firstItem = globalDataList.get(0);
//            globalDataDto.setDataKey(firstItem.getDataKey());
//            globalDataDto.setDataValue(firstItem.getDataValue());
//            globalDataDto.setType(firstItem.getType());
//        }
//        return globalDataDto;
//    }

    public  static GlobalData toEntity(GlobalDataDto dto){
        GlobalData globalData = new GlobalData();
        globalData.setDataKey(dto.getDataKey());
        globalData.setDataValue(dto.getDataValue());
        globalData.setDataKey(dto.getDataKey());

        return globalData;
    }

}

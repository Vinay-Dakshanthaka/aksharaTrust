package com.totfd.aksharatrust.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GlobalDataDto {

    private int id;

    @NotBlank
    private String dataKey;

    private String dataValue;

    private String type;

}

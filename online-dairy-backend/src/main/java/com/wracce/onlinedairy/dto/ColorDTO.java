package com.wracce.onlinedairy.dto;

import com.wracce.onlinedairy.enity.Color;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ColorDTO {
    private Long id;

    private String name;

    private String value;

    public static Color toEntity(ColorDTO dto) {
        return new Color(dto.getId(),dto.getName(), dto.getValue(),new ArrayList<>());
    }

    public static ColorDTO toDTO(Color entity) {
        return new ColorDTO(entity.getId(),entity.getName(), entity.getValue());
    }



}

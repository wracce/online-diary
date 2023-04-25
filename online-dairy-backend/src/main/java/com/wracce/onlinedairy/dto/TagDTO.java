package com.wracce.onlinedairy.dto;

import com.wracce.onlinedairy.enity.Color;
import com.wracce.onlinedairy.enity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TagDTO {
    private Long id;

    private String name;

    private String desc;

    public static Tag toEntity(TagDTO dto) {
        return new Tag(dto.getId(),dto.getName(), dto.getDesc(),new ArrayList<>());
    }

    public static TagDTO toDTO(Tag entity) {
        return new TagDTO(entity.getId(),entity.getName(), entity.getDesc());
    }



}

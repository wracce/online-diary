package com.wracce.onlinedairy.dto;

import com.wracce.onlinedairy.enity.DayRecord;
import com.wracce.onlinedairy.enity.DaySchedule;
import com.wracce.onlinedairy.enity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DayRecordDTO {
    private Long id;

    private String text;

    private boolean done;

    private TagDTO tag;

    public static DayRecord toEntity(DayRecordDTO dto) {
        DayRecord dr = new DayRecord();
        dr.setId(dto.getId());
        dr.setText(dto.getText());
        dr.setDone(dto.isDone());
        dr.setTag(TagDTO.toEntity(dto.getTag()));
        return dr;
    }

    public static DayRecordDTO toDTO(DayRecord entity) {
        return new DayRecordDTO(
                entity.getId(),
                entity.getText(),
                entity.isDone(),
                TagDTO.toDTO(entity.getTag()));}

}

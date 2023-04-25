package com.wracce.onlinedairy.dto;

import com.wracce.onlinedairy.enity.DaySchedule;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DayScheduleDTO {
    private Long id;

    private LocalDate date;

    private String note;

    private List<DayRecordDTO> dayRecords = new ArrayList<>();

    public static DaySchedule toEntity(DayScheduleDTO dto) {
        return new DaySchedule(
                dto.getId(),
                dto.getDate(),
                dto.getNote(),
                dto.getDayRecords().stream().map(rec -> DayRecordDTO.toEntity(rec)).toList());
    }

    public static DayScheduleDTO toDTO(DaySchedule entity) {
        return new DayScheduleDTO(
                entity.getId(),
                entity.getDate(),
                entity.getNote(),
                entity.getDayRecords().stream().map(rec -> DayRecordDTO.toDTO(rec)).toList());

    }

}

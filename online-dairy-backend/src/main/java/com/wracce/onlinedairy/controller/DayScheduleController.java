package com.wracce.onlinedairy.controller;

import com.wracce.onlinedairy.dto.DayRecordDTO;
import com.wracce.onlinedairy.dto.DayScheduleDTO;
import com.wracce.onlinedairy.dto.NoteDTO;
import com.wracce.onlinedairy.service.DayScheduleService;
import com.wracce.onlinedairy.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.aspectj.bridge.MessageUtil;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/day-schedules")
@RequiredArgsConstructor
public class DayScheduleController {
    private final DayScheduleService dayScheduleService;

    @GetMapping
    public List<DayScheduleDTO> findAll() {
        System.out.println("gfg");
        return dayScheduleService.findAll().stream().map(DayScheduleDTO::toDTO).toList();
    }

    @GetMapping("/{date}")
    public DayScheduleDTO findByDate(@PathVariable LocalDate date) {
        return DayScheduleDTO.toDTO(dayScheduleService.findByDate(date));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
        dayScheduleService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{date}")
    public DayRecordDTO createDayRecord(@RequestBody DayRecordDTO recDTO, @PathVariable LocalDate date) {
        return DayRecordDTO.toDTO(dayScheduleService.createDayRecord(DayRecordDTO.toEntity(recDTO), date));
    }

}

package com.wracce.onlinedairy.controller;

import com.wracce.onlinedairy.dto.DayRecordDTO;
import com.wracce.onlinedairy.dto.NoteDTO;
import com.wracce.onlinedairy.service.DayRecordService;
import com.wracce.onlinedairy.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/day-records")
@RequiredArgsConstructor
public class DayRecordController {
    private final DayRecordService dayRecordService;

    @PutMapping
    public DayRecordDTO update(@RequestBody DayRecordDTO recDTO) {
        return DayRecordDTO.toDTO(dayRecordService.update(DayRecordDTO.toEntity(recDTO)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
        dayRecordService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}

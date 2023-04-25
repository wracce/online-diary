package com.wracce.onlinedairy.service;

import com.wracce.onlinedairy.enity.DayRecord;
import com.wracce.onlinedairy.enity.DaySchedule;
import com.wracce.onlinedairy.enity.Note;
import com.wracce.onlinedairy.repository.DayScheduleRepository;
import com.wracce.onlinedairy.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DayScheduleService {

    private final DayScheduleRepository dayScheduleRepository;

    private final DayRecordService dayRecordService;

    public List<DaySchedule> findAll() {
        return dayScheduleRepository.findAll();
    }

    public DaySchedule findByDate(LocalDate date) {
        return dayScheduleRepository.findDayScheduleByDate(date);
    }

    public void delete(long id) {
        dayScheduleRepository.deleteById(id);
    }

    public boolean existsById(long id) {
        return dayScheduleRepository.existsById(id);
    }

    private DaySchedule create() {
        DaySchedule day = new DaySchedule(null,LocalDate.now(),"", new ArrayList<DayRecord>());
        return dayScheduleRepository.save(day);
    }

    private DaySchedule create(LocalDate date) {
        DaySchedule day = new DaySchedule(null,date,"", new ArrayList<DayRecord>());
        return dayScheduleRepository.save(day);
    }

    public DayRecord createDayRecord(DayRecord rec, LocalDate date) {
        DaySchedule day;
        if(dayScheduleRepository.existsByDate(date))
            day = findByDate(date);
        else
            day = create(date);

        rec.setDaySchedule(day);

        return dayRecordService.create(rec);
    }
}

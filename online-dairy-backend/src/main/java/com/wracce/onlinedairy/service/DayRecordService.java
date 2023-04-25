package com.wracce.onlinedairy.service;

import com.wracce.onlinedairy.enity.DayRecord;
import com.wracce.onlinedairy.enity.Note;
import com.wracce.onlinedairy.repository.DayRecordRepository;
import com.wracce.onlinedairy.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DayRecordService {
    private final DayRecordRepository dayRecordRepository;


    public DayRecord update(DayRecord rec) {
        //dayRecordRepository.
        return dayRecordRepository.save(rec);
    }

    public void delete(long id) {
        dayRecordRepository.deleteById(id);
    }

    public DayRecord create(DayRecord rec) {
        return  dayRecordRepository.save(rec);
    }
}

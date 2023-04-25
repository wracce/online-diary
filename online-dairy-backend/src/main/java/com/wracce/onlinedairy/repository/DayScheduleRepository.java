package com.wracce.onlinedairy.repository;

import com.wracce.onlinedairy.enity.DaySchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.time.LocalDate;

public interface DayScheduleRepository extends JpaRepository<DaySchedule, Long> {
    DaySchedule findDayScheduleByDate(LocalDate date);

    boolean existsById(Long id);

    boolean existsByDate(LocalDate date);
}
package com.wracce.onlinedairy.repository;

import com.wracce.onlinedairy.enity.DayRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayRecordRepository extends JpaRepository<DayRecord, Long> {
}
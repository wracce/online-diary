package com.wracce.onlinedairy.enity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class DaySchedule {
    @NotNull
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @NotNull
    @Column(unique = true)
    private LocalDate date;

    @Column(length = 1000, columnDefinition = "text")
    private String note;


    @OneToMany(mappedBy = "daySchedule", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DayRecord> dayRecords = new ArrayList<>();

}

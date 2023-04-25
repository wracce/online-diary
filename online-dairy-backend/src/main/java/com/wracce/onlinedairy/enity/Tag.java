package com.wracce.onlinedairy.enity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(unique = true, length = 6, columnDefinition = "text")
    private String name;

    @Column(length = 150, columnDefinition = "text")
    private String desc;

    @OneToMany(mappedBy = "tag", orphanRemoval = true)
    private List<DayRecord> dayRecords = new ArrayList<>();

}

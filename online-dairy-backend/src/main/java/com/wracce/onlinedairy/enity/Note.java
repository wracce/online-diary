package com.wracce.onlinedairy.enity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(length = 100, columnDefinition = "text")
    private String header;

    @Column(length = 1000, columnDefinition = "text")
    private String content;


    private Timestamp created;

    private boolean marked;

    @ManyToOne
    @JoinColumn(name = "color_id")
    private Color color;

}

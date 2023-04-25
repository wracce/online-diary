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
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "uc_color_value_name", columnNames = {"value", "name"})
})
public class Color {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 40, columnDefinition = "text")
    private String name;

    @Column(name = "value", length = 20, columnDefinition = "text")
    private String value;

    @OneToMany(mappedBy = "color", orphanRemoval = true)
    private List<Note> notes = new ArrayList<>();

}

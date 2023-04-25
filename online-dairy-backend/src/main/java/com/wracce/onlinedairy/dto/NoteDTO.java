package com.wracce.onlinedairy.dto;

import com.wracce.onlinedairy.enity.Note;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NoteDTO {
    private Long id;

    private String header;

    private String content;

    private Timestamp created;

    private boolean marked;

    private ColorDTO color;

    public static Note toEntity(NoteDTO dto) {
        return new Note(
                dto.getId(),
                dto.getHeader(),
                dto.getContent(),
                dto.getCreated(),
                dto.isMarked(),
                ColorDTO.toEntity(dto.getColor()));
    }

    public static NoteDTO toDTO(Note entity) {
        return new NoteDTO(
                entity.getId(),
                entity.getHeader(),
                entity.getContent(),
                entity.getCreated(),
                entity.isMarked(),
                ColorDTO.toDTO(entity.getColor()));
    }

}

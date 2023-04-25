package com.wracce.onlinedairy.repository;

import com.wracce.onlinedairy.enity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {

}
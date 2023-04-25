package com.wracce.onlinedairy.repository;

import com.wracce.onlinedairy.enity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
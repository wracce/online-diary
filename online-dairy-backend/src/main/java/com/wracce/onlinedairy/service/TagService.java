package com.wracce.onlinedairy.service;

import com.wracce.onlinedairy.enity.Color;
import com.wracce.onlinedairy.enity.Tag;
import com.wracce.onlinedairy.repository.ColorRepository;
import com.wracce.onlinedairy.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public List<Tag> findAll() {
        return tagRepository.findAll();
    }
}

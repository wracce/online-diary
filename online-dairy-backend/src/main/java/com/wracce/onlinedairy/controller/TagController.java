package com.wracce.onlinedairy.controller;

import com.wracce.onlinedairy.dto.ColorDTO;
import com.wracce.onlinedairy.dto.TagDTO;
import com.wracce.onlinedairy.service.ColorService;
import com.wracce.onlinedairy.service.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tags")
@RequiredArgsConstructor
public class TagController {
    private final TagService tagService;

    @GetMapping
    public List<TagDTO> findAll() {
        return tagService.findAll().stream().map(TagDTO::toDTO).toList();
    }
}

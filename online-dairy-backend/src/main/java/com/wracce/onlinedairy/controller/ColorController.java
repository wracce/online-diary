package com.wracce.onlinedairy.controller;

import com.wracce.onlinedairy.dto.ColorDTO;
import com.wracce.onlinedairy.service.ColorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/colors")
@RequiredArgsConstructor
public class ColorController {
    private final ColorService colorService;

    @GetMapping
    public List<ColorDTO> findAll() {
        return colorService.findAll().stream().map(ColorDTO::toDTO).toList();
    }
}

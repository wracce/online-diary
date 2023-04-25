package com.wracce.onlinedairy.service;

import com.wracce.onlinedairy.dto.ColorDTO;
import com.wracce.onlinedairy.enity.Color;
import com.wracce.onlinedairy.repository.ColorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ColorService {

    private final ColorRepository colorRepository;

    public List<Color> findAll() {
        return colorRepository.findAll();
    }
}

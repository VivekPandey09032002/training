package com.vivek.store.mapper.impl;

import com.vivek.store.domain.dto.AuthorDto;
import com.vivek.store.domain.entity.AuthorEntity;
import com.vivek.store.mapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthorMapperImpl implements Mapper<AuthorEntity, AuthorDto> {

    private final ModelMapper modelMapper;


    @Override
    public AuthorDto mapTo(AuthorEntity authorEntity) {
        return modelMapper.map(authorEntity, AuthorDto.class);
    }

    @Override
    public AuthorEntity mapFrom(AuthorDto authorDto) {
        return modelMapper.map(authorDto, AuthorEntity.class);
    }
}
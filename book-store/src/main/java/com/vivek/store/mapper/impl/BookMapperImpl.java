package com.vivek.store.mapper.impl;

import com.vivek.store.domain.dto.BookDto;
import com.vivek.store.domain.entity.BookEntity;
import com.vivek.store.mapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BookMapperImpl implements Mapper<BookEntity, BookDto> {

    private final ModelMapper modelMapper;



    @Override
    public BookDto mapTo(BookEntity bookEntity) {
        return modelMapper.map(bookEntity, BookDto.class);
    }

    @Override
    public BookEntity mapFrom(BookDto bookDto) {
        return modelMapper.map(bookDto, BookEntity.class);
    }
}

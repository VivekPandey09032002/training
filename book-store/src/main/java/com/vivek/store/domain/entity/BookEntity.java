package com.vivek.store.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="books")
@Getter
@Setter
public class BookEntity {

    @Id
    private String isbn;

    private String title;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "author_id")
    private AuthorEntity authorEntity;

}

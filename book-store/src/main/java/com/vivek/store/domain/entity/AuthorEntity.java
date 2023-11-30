package com.vivek.store.domain.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "authors")
@Getter
@Setter
public class AuthorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "author_id_seq")
    private Long id;

    private String name;

    private Integer age;

}

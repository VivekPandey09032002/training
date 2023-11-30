package com.vivek.store.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;
import org.hibernate.Hibernate;

import java.util.Objects;

@Entity
@Table(name = "people")
@ToString
@Accessors(makeFinal   = true)
@Setter
@Getter
@NoArgsConstructor
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    private int age;

    private String email;

    @Builder
    public Person(@NonNull String firstName,@NonNull String lastName, int age, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }


    public static void main(String[] args) {
        Person personWithMandatoryFields = Person.builder()
                .firstName("John")
                .build();

        Person personWithAllFields = Person.builder()
                .firstName("Jane")
                .lastName("Smith")
                .age(25)
                .email("jane.smith@example.com")
                .build();

        personWithAllFields.setAge(20);

        System.out.println(personWithMandatoryFields);
        System.out.println(personWithAllFields);
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Person person = (Person) o;
        return (person.firstName + person.lastName).equals((this.firstName+this.lastName));
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

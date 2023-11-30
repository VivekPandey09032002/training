package com.vivek.store.mapper;

public interface Mapper<A,B> {

    B mapTo(A a);

    A mapFrom(B b);

}
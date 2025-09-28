package com.myapp.valuationproject.test.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TestMapper {
    @Select("SELECT NOW()")
    String getCurrentTime();
}

package com.myapp.valuationproject.test.controller;

import com.myapp.valuationproject.test.mapper.TestMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    private final TestMapper testMapper;

    public TestController(TestMapper testMapper) {
        this.testMapper = testMapper;
    }

    @GetMapping("/db-test")
    public String testDbConnection() {
        return testMapper.getCurrentTime();
    }
}

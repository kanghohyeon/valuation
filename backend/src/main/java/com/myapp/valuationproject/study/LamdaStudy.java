package com.myapp.valuationproject.study;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class LamdaStudy {
    public void asd(){

        Study s = (name,pass)-> name+pass;

        String ss= s.login("asd","asd");
        List<String> ls = new ArrayList<>(10);
        String a = "asd";

    }

    public class LambdaExample1 {
        public static void main(String[] args) {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

            numbers.stream()
                    .filter(n -> n % 2 == 0)  // 짝수만
                    .forEach(n -> System.out.println("짝수: " + n));
        }
    }
}
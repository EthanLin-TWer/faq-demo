package com.thoughtworks.faq.controller;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

public class HealthyCheckControllerTest {
    @Test
    public void should_return_healthy_check_successful_string() throws Exception {
        String result = new HealthyCheckController().appcheck();

        assertThat(result, is("faq-spring-boot-backend-is-up-and-running"));
    }
}
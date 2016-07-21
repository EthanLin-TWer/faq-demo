package com.thoughtworks.faq.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthyCheckController {
    @RequestMapping("")
    public String appcheck() {
        return "faq-spring-boot-backend-is-up-and-running";
    }
}

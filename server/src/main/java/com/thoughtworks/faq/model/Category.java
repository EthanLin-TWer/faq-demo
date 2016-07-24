package com.thoughtworks.faq.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Category {
    GENERIC("generic"),
    HOME("home"),
    MOTOR("motor");

    private String category;

    Category(String category) {
        this.category = category;
    }

    @JsonValue
    public String getCategory() {
        return this.category;
    }
}

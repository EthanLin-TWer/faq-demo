package com.thoughtworks.faq.controller;

import com.thoughtworks.faq.model.Category;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
public class CategoryController {
    @RequestMapping("/categories")
    public Map<String, List<Category>> getCategories(String brand) {
        List<Category> categories = new ArrayList<Category>();
        categories.add(Category.GENERIC);
        categories.add(Category.HOME);
        categories.add(Category.MOTOR);

        return Collections.singletonMap("categories", categories);
    }
}

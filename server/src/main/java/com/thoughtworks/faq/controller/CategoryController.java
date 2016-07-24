package com.thoughtworks.faq.controller;

import com.thoughtworks.faq.model.Category;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class CategoryController {
    @RequestMapping("/categories/{brand}")
    public Map<String, List<Category>> getCategories(@PathVariable String brand) {
        return Collections.singletonMap("categories", getCategoriesForBrand(brand));
    }

    private List<Category> getCategoriesForBrand(String brand) {
        return CATEGORIES_MAP.get(brand);
    }

    private static final Map<String, List<Category>> CATEGORIES_MAP = new HashMap<>();

    {
        CATEGORIES_MAP.put("personal-insurance", new ArrayList<>(Arrays.asList(Category.GENERIC, Category.HOME, Category.MOTOR)));
    }
}

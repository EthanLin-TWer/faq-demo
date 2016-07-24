package com.thoughtworks.faq.controller;

import com.thoughtworks.faq.model.Category;
import org.junit.Test;

import java.util.List;
import java.util.Map;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class CategoryControllerTest {
    @Test
    public void should_return_json_with_all_possible_categories() throws Exception {
        CategoryController categoryController = new CategoryController();

        Map<String, List<Category>> categoriesJson = categoryController.getCategories("personal-insurance");
        List<Category> categories = categoriesJson.get("categories");

        assertThat(categories.contains(Category.GENERIC), is(true));
        assertThat(categories.contains(Category.HOME), is(true));
        assertThat(categories.contains(Category.MOTOR), is(true));
    }
}

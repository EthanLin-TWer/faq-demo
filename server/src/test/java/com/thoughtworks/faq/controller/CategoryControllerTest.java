package com.thoughtworks.faq.controller;

import com.thoughtworks.faq.model.Category;
import org.junit.Test;

import java.util.List;
import java.util.Map;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertThat;

public class CategoryControllerTest {
    @Test
    public void should_return_json_with_all_possible_categories() throws Exception {
        CategoryController categoryController = new CategoryController();

        Map<String, List<Category>> categories = categoryController.getCategories("personal-insurance");

        assertThat(categories, is(notNullValue()));
    }
}

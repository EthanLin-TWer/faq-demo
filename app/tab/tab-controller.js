export default class TabController {

    constructor (categoryService) {
        this.currentSelection = 'generic'
        this.categoryService = categoryService;
        
        this.categoryService.getCategories();
    }

    setCategoryAsSelected(category) {
        this.currentSelection = category;
    }

    isCategorySelected(category) {
        return category === this.currentSelection
    }
}

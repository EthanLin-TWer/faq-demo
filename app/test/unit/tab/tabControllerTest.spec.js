import { expect } from 'chai'
import sinon from 'sinon'
import TabController from '../../../tab/tab-controller.js'
import CategoryService from '../../../tab/category-service.js'

describe('tab controller', () => {

    describe('when bootstrap...', () => {
        let categoryService;

        beforeEach(() => {
            categoryService = new CategoryService();
        })

        it('should call service to get all available categories', () => {
            const getCategoriesSpy = sinon.spy(categoryService, 'getCategories')
            const tabController = new TabController(categoryService);

            expect(getCategoriesSpy.calledOnce).to.be.true;
        })

        it('should return generic category selected when generic tab is clicked', () => {
            const tabController = new TabController(categoryService)

            tabController.setCategoryAsSelected('generic');

            expect(tabController.isCategorySelected('generic')).to.be.true
        })
    })
});

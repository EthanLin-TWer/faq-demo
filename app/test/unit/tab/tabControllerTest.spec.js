import { expect } from 'chai'
import sinon from 'sinon'
import TabController from '../../../tab/tab-controller.js'
import CategoryService from '../../../tab/category-service.js'

describe('tab controller', () => {

    describe('when bootstrap...', () => {
        let categoryService;
        let tabController;

        beforeEach(() => {
            categoryService = new CategoryService()
            tabController = new TabController(categoryService)
        })

        it('should call service to get all available categories', () => {
            const getCategoriesSpy = sinon.spy(categoryService, 'getCategories')
            tabController = new TabController(categoryService)

            expect(getCategoriesSpy.calledWith('personal-insurance')).to.be.true
        })

        it('should return generic category selected when generic tab is clicked', () => {
            tabController.setCategoryAsSelected('generic')

            expect(tabController.isCategorySelected('generic')).to.be.true
        })

        it('should return generic category not selected when home tab is clicked', () => {
            tabController.setCategoryAsSelected('home')

            expect(tabController.isCategorySelected('generic')).to.be.false
        })

        it('should return motor category selected when motor tab is clicked', () => {
            tabController.setCategoryAsSelected('motor')

            expect(tabController.isCategorySelected('motor')).to.be.true
        })
    })
});

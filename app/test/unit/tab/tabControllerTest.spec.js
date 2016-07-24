import { expect } from 'chai'
import sinon from 'sinon'
import TabController from '../../../tab/tab-controller.js'
import CategoryService from '../../../tab/category-service.js'

describe('tab controller', () => {

    describe('when bootstrap...', () => {
        let tabController;
        let categoryService;

        beforeEach(() => {
            categoryService = new CategoryService();
        })

        it('should call service to get all available categories', () => {
            const getCategoriesSpy = sinon.spy(categoryService, 'getCategories')

            tabController = new TabController(categoryService);

            expect(getCategoriesSpy.calledOnce).to.be.true;
        })
    })
});

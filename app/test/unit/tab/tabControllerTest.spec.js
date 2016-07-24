import { expect } from 'chai'
import TabController from '../../../tab/tab-controller.js'

describe('tab controller', () => {
    describe('when initialized', () => {
        let tabController;

        beforeEach(() => {
            tabController = new TabController();
        });

        it('should have a variable named first initialized', () => {
            expect(tabController.first).to.equal('Angular up and running!')
        });
    });

    describe('when functioning...', () => {

    })
});

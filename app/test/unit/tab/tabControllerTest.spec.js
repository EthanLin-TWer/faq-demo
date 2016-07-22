import { expect } from 'chai'
import TabController from '../../../tab/tab-controller.js'

describe('tab controller', function() {
    describe('when initialized', function () {
        let tabController;

        beforeEach(function() {
            tabController = new TabController();
        });

        it('should have a variable named first initialized', function () {
            expect(tabController.first).to.equal('Angular up and running!')
        });
    });
});
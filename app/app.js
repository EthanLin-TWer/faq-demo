import angular from 'angular'
import TabController from './tab/tab-controller'
import CategoryService from './tab/category-service'

angular.module('FAQApp', [])
    .controller('tabController', TabController)
    .service('categoryService', CategoryService);

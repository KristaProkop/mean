var myAppModule = angular.module('myApp', []);

myAppModule.factory('productFactory', function (){
    
    var products = [
        {name: 'Keyboard', price: 10.99},
        {name: 'Muffin', price: 2.99},
        {name: 'Monitor', price: 99.99}];

    var factory = {};
    
    factory.index = function (callback){
        callback(products);

    }

    return factory;
});



myAppModule.controller('productController', ['$scope', 'productFactory', function ($scope, productFactory){
    $scope.test = function() {
        return 4;
    }

    $scope.products = [];
  
    productFactory.index(function (data){
        $scope.products = data;
    })

    $scope.priceSort = function() {
        $scope.products.sort(function(a, b) {
            console.log(parseFloat(a.price))
            return parseFloat(a.price) - parseFloat(b.price);
        });
    }

    $scope.addProduct = function() {
        $scope.products.push($scope.newProduct)
        $scope.newProduct = {};
    }

    $scope.deleteProduct = function(index) {
        $scope.products.splice(index, 1);
    }


}])
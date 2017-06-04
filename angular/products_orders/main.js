var myAppModule = angular.module('myApp', []);

myAppModule.factory('productFactory', function (){
    
    var products = [
        {name: 'Keyboard', price: 10.99, qty: 50},
        {name: 'Muffin', price: 2.99, qty: 50},
        {name: 'Monitor', price: 99.99, qty: 50}];

    var factory = {};
    
    factory.index = function (callback){
        callback(products);
    }

    return factory;
});


myAppModule.controller('productController', ['$scope', 'productFactory', function ($scope, productFactory){

    $scope.products = [];
  
    productFactory.index(function (data){
        $scope.products = data;
    })

    $scope.priceSort = function() {
        $scope.products.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
    }

    $scope.addProduct = function() {
        $scope.newProduct.qty = 50;
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
    }

    $scope.deleteProduct = function(index) {
        $scope.products.splice(index, 1);
    }
}])


myAppModule.controller('orderController', ['$scope', 'productFactory', function ($scope, productFactory){
  
    productFactory.index(function (data){
        $scope.products = data;
    })

    $scope.placeOrder = function(index) {
        if ($scope.products[index].qty >= 1) {
            $scope.products[index].qty -= 1;
        } 
        alert("Successfully ordered product!")
    }
}])

app.controller('selected-products', ['$scope', function($scope) {
    $scope.productList = JSON.parse(sessionStorage.getItem('products'));   //list with all the products selected



}]);
app.directive('addProduct', function() {
   return {
        restrict: 'E',
        scope: {
            info: '='
        },
       templateUrl: 'js/directives/addProduct.html',

       link: function (scope, element, attrs ) {
            scope.show = false;

            scope.addShoppingCar = function() {
                ++sessionStorage.number;
                document.getElementById("number").innerHTML = sessionStorage.number;
                sessionStorage.totalAmount = scope.info.price + parseInt(sessionStorage.totalAmount);   //update total amount

                if (list.indexOf(scope.info) == -1) //not found
                {
                    quantity.set(scope.info.code, 1);   //we cannot use the whole object as a key, but the distinctive code
                    list.push(scope.info);
                    sessionStorage.setItem('products', JSON.stringify(list));    //sessionStorage només accepta strings
                    sessionStorage.quantities = JSON.stringify([...quantity]);
                }
                else {  //here add one in quantity
                    var value = quantity.get(scope.info.code);
                    quantity.set(scope.info.code, value+1);
                    sessionStorage.quantities = JSON.stringify([...quantity]);
                }
            }

       }

   };
});
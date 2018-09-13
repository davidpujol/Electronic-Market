app.directive ('shoppingProducts', function() {
   return {
       restrict: 'E',
       scope: {
            info: '='
       },
       templateUrl: "js/directives/shoppingProducts.html",

       link: function(scope, element, attrs) {
           scope.recoveredMap = new Map(JSON.parse(sessionStorage.quantities));    //list of quantities of each product¡
           scope.quantity = scope.recoveredMap.get(scope.info.code);   //we create the variable value

               scope.addOne = function() {
                   var value = scope.recoveredMap.get(scope.info.code);
                   scope.recoveredMap.set(scope.info.code, value+1);
                   sessionStorage.setItem('quantities', JSON.stringify(scope.recoveredMap));
                   scope.quantity = scope.recoveredMap.get(scope.info.code);

                   sessionStorage.totalAmount = parseInt(sessionStorage.totalAmount) + scope.info.price;
                   document.getElementById("amountVal").innerHTML = sessionStorage.totalAmount;

                   sessionStorage.number = parseInt(sessionStorage.number) +1;
                   document.getElementById("number").innerHTML = sessionStorage.number;

               }

               scope.removeOne = function() {
                   var value = scope.recoveredMap.get(scope.info.code);
                   if (value >= 1) {
                       scope.recoveredMap.set(scope.info.code, value - 1);
                       sessionStorage.setItem('quantities', JSON.stringify(scope.recoveredMap));
                       scope.quantity = scope.recoveredMap.get(scope.info.code);

                       sessionStorage.totalAmount = parseInt(sessionStorage.totalAmount) - scope.info.price;
                       document.getElementById("amountVal").innerHTML = sessionStorage.totalAmount;

                       sessionStorage.number = parseInt(sessionStorage.number) - 1;
                       document.getElementById("number").innerHTML = sessionStorage.number;
                   }
               }


       }

   }

});
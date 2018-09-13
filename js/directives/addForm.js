app.directive ('addForm', function() {
   return {
       restrict: 'E',
       scope: {},
       templateUrl: 'js/directives/addForm.html',
       link: function(scope, elem, attrs) {

           var e = document.getElementById("typePayment");
           scope.type = e.options[e.selectedIndex].text;
           scope.isCreditCard = (scope.type == 'Credit Card');
           scope.isBankTransfer = (scope.type == 'Bank transfer');

           scope.check = function() {
               if (document.getElementById("email").value != document.getElementById("email2").value)
                   alert("The emails do not match");
           }

           scope.update = function() {
               var e = document.getElementById("typePayment");
               scope.type = e.options[e.selectedIndex].text;
               scope.isCreditCard = (scope.type == 'Credit Card');
               scope.isBankTransfer = (scope.type == 'Bank transfer');
           }

       }


   }

});
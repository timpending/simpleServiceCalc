trig.controller("TrigController", function($scope, CalculatorFactory){
  $scope.calculate = function(){
    $scope.hypotenuse = CalculatorFactory.calcHypoth($scope.sideA, $scope.sideB);
    }
});

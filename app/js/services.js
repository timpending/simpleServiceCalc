trig.factory("CalculatorFactory", function(){
  return {
    calcHypoth: function(a, b) {
      return Math.sqrt((Number(a)*Number(a) + (Number(b)*Number(b))));
    }
  }
})

//C. Sum of all numbers in an array

var sumOfNum = [25,53,-355,643,32,64,-152];
//Anonymous Function

var Sum = 0;
var task3=function(array){
      for(var i=0;i<array.length;i++){
      Sum=Sum+array[i];
   }
   return Sum;
}
console.log(task3(sumOfNum));

//IIFE Function
var Sum = 0;
(function Result3(array){
   for(var i=0;i<array.length;i++){
      Sum=Sum+array[i];
   }
   console.log(Sum);
})(sumOfNum);

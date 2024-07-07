//D. Return all the prime numbers in an array

var primeNum=[1,2,3,5,6,7,8,11,59,29,61];
//Anonymous Function

var task4 = [];
var num=function(array){
    for(var i=0;i<array.length;i++){
        var count=0;
      if(array[i]<1){
        break
      }
    for(var j=2;j<=array[i];j++){
      if(array[i]%j==0) {
          count++
      }
    }
      if(count<2){
            task4.push(array[i]);
      }
    }
   return task4;
}
console.log(num(primeNum));

// IIFE Function
var task4 = [];
(function num(array){
for(var i=0;i<array.length;i++){
  var count=0;
  if(array[i]<1){
    break;
  }
for(var j=2;j<=array[i];j++){
  if(array[i]%j==0){
    count++
  }
}
  if(count<2){
    task4.push(array[i]);
  }
}
console.log(task4);
})(primeNum);
//F. Return median of two sorted arrays of the same size.

var sameSize = [10,30,50,70,90];
var sameSize2 = [20,40,60,80,100];
//Anonymous Function

var median = function(n1,n2){
  var arr = [...n1,...n2].sort((a,b) => a-b);
  if(arr.length%2===0){
    var mid1 = arr[arr.length/2];
    var mid2 = arr[arr.length/2-1];
    return((mid1+mid2)/2); 
  }
  else{
    return (arr[Math.floor(arr.length/2)]);
  }
};
console.log(median(sameSize,sameSize2));

//IIFE Function
(function median(n1,n2){
  var arr = [...n1,...n2].sort(function(a,b){return a-b});
  if(arr.length%2==0){
    var mid1 = arr[arr.length/2];
    var mid2 = arr[arr.length/2-1];
    console.log((mid1+mid2)/2); 
  }
  else{
    console.log(arr[Math.floor(arr.length/2)]);
  } 
})(sameSize,sameSize2);

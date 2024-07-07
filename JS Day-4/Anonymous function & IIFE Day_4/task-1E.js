//E. Return all the palindromes in an array

var palindrome = ["eye","subash","level","look","143","pop","wow",];
//Anonymous Function

var task5 = [];
var words=function(arr5){
   for(var i=0;i<arr5.length;i++){
      var OS = arr5[i];
      var RS = arr5[i].split("").reverse().join("");
      if(OS==RS){
         task5.push(arr5[i]);
      }
   }
   return task5;
   }
   console.log(words(palindrome));

   //IIFE Function
var task5 = [];
(function words(arr5){
   for(var i=0;i<arr5.length;i++){
      var OS = arr5[i];
      var RS = arr5[i].split("").reverse().join("");
      if(OS==RS){
         task5.push(arr5[i]);
      }
   }
   console.log(task5);
})(palindrome);
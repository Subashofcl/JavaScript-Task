//A. Print odd numbers in an array

var oddNum = [45,60,65,100,244,465,866,343,252,864,875,837];
//Anonymous function

var Odd = "";
var task1=function(odd1){
   for(var i=0;i<odd1.length;i++){
      if(odd1[i]%2!=0){
         Odd = Odd+(oddNum[i])+" ";
      }
   }
   return Odd;
   }
   console.log((task1(oddNum)).trim());

//IIFE Function
var Odd = "";
(function task1(odd1){
    for(var i=0;i<odd1.length;i++){
       if(odd1[i]%2!=0){
          Odd = Odd+(oddNum[i])+" ";
       }
    }
    console.log(Odd.trim());
 })(oddNum);
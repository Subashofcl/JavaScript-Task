//A. Print odd numbers in an array

// Arrow Function
var num = [10,27,34,39,45,42,55,58,62,63,];
var Odd = "";
var task1=()=>{
   for(var i=0;i<num.length;i++){
            if(num[i]%2!=0){
               Odd = Odd+(num[i])+" ";
            }
         }
      return Odd;
   }
console.log((task1(num)).trim());  

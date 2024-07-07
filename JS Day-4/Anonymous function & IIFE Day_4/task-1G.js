//G. Remove duplicates from an array

var dupNum=[10,15,20,25,30,15];
//Anonymous Function

var temp=[];
var org=function(num){
  for(var i=0;i<num.length;i++){
    var count=0;
    for(var j=0;j<num.length;j++){
      if(num[i]==num[j]){
        count++;
      }
    }
    if(count<=1){
       temp.push(num[i]);
    }
  }
  return(temp);  
};
console.log(org(dupNum));

//IIFE Function
var temp=[];
(function(num){
  for(var i=0;i<num.length;i++){
    var count=0;
    for(var j=0;j<num.length;j++){
      if(num[i]==num[j]){
        count++;
      }
    }
    if(count<=1){
       temp.push(num[i]);
    }
  }
  console.log(temp);  
}
)(dupNum);

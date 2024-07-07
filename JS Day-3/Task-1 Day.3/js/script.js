//Day 3>>Task-1 

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

function isEqual(obj1,obj2){
    let obj1Data = Object.keys(obj1);
    let obj2Data = Object.keys(obj2);

if(obj1Data.length != obj2Data.length){
  return "Both are not same";

}
for (var objkey of obj1Data) {
  if (obj1[objkey] != obj2[objkey]){
    return "Both are not same";
  }
}
 return "Both are same";
}

console.log(isEqual(obj1,obj2));
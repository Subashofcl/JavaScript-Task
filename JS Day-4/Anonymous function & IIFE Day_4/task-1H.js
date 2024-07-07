//H. Rotate an array by k times

let ktime = [1,2,3,4,5,6,7,8];
//Ananymous function
let k = 2;
let len = ktime.length;
let times = k%len;

let rotate = function(array,t){
    console.log(array.concat(array.splice(0,t)));
}
rotate(ktime,times);

//IIFE
let task7 = ( (array,t) => {
    console.log(array.concat(array.splice(0,t)));
})(ktime,times);
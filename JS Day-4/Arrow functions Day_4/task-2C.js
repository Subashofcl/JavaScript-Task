//C. Sum of all numbers in an array

// Arrow Function
let num = [10,-53,69,55];
let sum = (array) => {
    let sum = 0;
    array.forEach(x => sum += x);
    console.log(sum);
}
sum(num)
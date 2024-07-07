//D. Return all the prime numbers in an array

// Arrow Function
let numArray = [41,27,53,79,73,65,11];

let prime = (num) => {
    if(num === 0 || num === 1){
        return false;
    }
    else{
        if(num === 2){
            return true;
        }
        else{
            for(let i=2;i<num;i++){
                if(num%i === 0){
                    return false;
                }
            }
            return true;
        }
    }
}

let primeNumbers = (array) => {
    let arr = [];
    for(let num of array){
        if(prime(num)){
            arr.push(Number(num));
        }
    }
    console.log(arr);
}

primeNumbers(numArray);
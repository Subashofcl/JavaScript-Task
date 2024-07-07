//E. Return all the palindromes in an array

// Arrow Function
let name = ["wow","subash","have","high","level","eye"]

let task5 = (word) => {
    let reversedWord = word.split("").reverse().join("");
    if(word == reversedWord){
        return true;
    }
    else{
        return false;
    }
}

let palindrome = (array) => {
    let arr = [];
    for(let word of array){
        if(task5(word)){
            arr.push(word);
        }
    }
    console.log(arr);
}

palindrome(name)
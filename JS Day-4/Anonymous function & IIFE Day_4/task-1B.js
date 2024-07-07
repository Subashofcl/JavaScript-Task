//B. Convert all the strings to title caps in a string array

let upperCase = ["subash","chennai","may","month"]
//Anonymous function:

let task2 = function(array) {
    for(let detils in array){
        array[detils] = array[detils].toUpperCase()
    }
    console.log(array)
}

task2(upperCase)

//IIFE:
let upperCase2 = ( function(array) {
    for(let detils in array){
        array[detils] = array[detils].toUpperCase()
    }
    console.log(array)
} )(upperCase)
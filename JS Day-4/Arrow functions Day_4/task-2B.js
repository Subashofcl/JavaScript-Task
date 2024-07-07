//B. Convert all the strings to title caps in a string array

// Arrow Function
let nameCap = ["subash","chennai","india"];
let titleCaps = (array) => {
    let new_array = array.map((x => x = x.charAt(0).toUpperCase() + x.slice(1) ));
    console.log(new_array)
}

titleCaps(nameCap)
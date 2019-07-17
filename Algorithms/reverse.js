// let myString = "hello world";

// let stringArray = myString.split('');

// stringArray.reverse();

// let finalResult = stringArray.join('');

// console.log(finalResult);


//reverse a string function
let reverseString = (myString)=>{
    let stringArray = myString.split('').reverse().join('');
    return stringArray;
}

//check if a string is palindrome
let palindrome = (myString)=>{
    //longer way but still works 
    let stringArray = myString.split('').reverse().join('');
    if (myString == stringArray){
        return true;
    }
    else {
        return false;
    }
    //shorter way
    // return myString === myString.split('').reverse().join('');
}

//revorse an integer
let reverseInt = (num)=>{
    let num_string = num.toString();
    let reverse = num_string.split('').reverse().join('');
    return parseInt(reverse) * Math.sign(num);
}

// console.log(reverseInt(-391));

let reverseString2 = (str)=>{
    let reverse = '';
    for (let char of str){
        reverse = char + reverse;
    }
    return reverse;
}

let reverseInt2 = (num)=>{
    //check the sign
    let sign = num >= 0 ? 1 : -1;
    let numString = num.toString();
    let reverseNum = reverseString2(numString);
    return parseInt(reverseNum) * sign;
}

// console.log(reverseInt2(-1933))


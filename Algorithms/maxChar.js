let myString = "Digitaal Crafts";
let myCharMap = {};
let max = 0;
let maxKey = '';

for (let char of myString){ 
    if(!myCharMap[char]){
        myCharMap[char]= 1;
    }
    else {
        myCharMap[char]++;
    }
}
for (let key in myCharMap){
    if (myCharMap[key] > max){
        max = myCharMap[key];
        maxKey = key;
    }
}

console.log(`${max} of the letter ${maxKey}`);
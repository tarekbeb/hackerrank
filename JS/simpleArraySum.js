function simpleArraySum(ar) {
    let n = ar.length;
    let i = 0;
    let sum = 0;
    
    for (let i = 0; i < ar.length; i++) {
        sum =+ ar[i];
    }
    return sum;
}
arr = [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(arr))
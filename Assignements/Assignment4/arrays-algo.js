// 1. Using the given array Print Values and Sum
// Print each array value and the sum so far

var testArr = [6,3,5,1,2,4]
let sum = 0;
for(num of testArr){
    sum += num;
    console.log(`Num ${num}, Sum ${sum}`)
}

// 2. Value * Position
// Multiply each value in the array by its array position
// The expected output will be: [0,3,10,3,8,20]
for(let i = 0; i < testArr.length; i ++){
    testArr[i] *= i;
}
console.log(testArr)



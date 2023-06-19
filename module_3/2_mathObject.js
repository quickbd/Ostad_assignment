


/*2.Math Object
a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
Solution:*/
function squareRootOfSum(arr) {
  let sumOfSquares = 0; 
  for(let i = 0; i < arr.length; i++) {
    sumOfSquares += Math.pow(arr[i], 2);
  } 
  return Math.sqrt(sumOfSquares);
}
let   arrayNum = [4,6,9,7];
console.log(squareRootOfSum(arrayNum));


/*b. Implement the function to display the square root of the sum of squares for an array of numbers.
Solution:*/
function sqrtSumOfSquares(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }
  console.log(sum)
  return Math.sqrt(sum);
}
console.log(sqrtSumOfSquares([2,3,10]));

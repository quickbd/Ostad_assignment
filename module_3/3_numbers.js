/*3.Numbers:
a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
*/
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));  //4 = false, 5 =true


/*b. Implement the function to check if a given positive integer is a prime number.
 */


function isPosPrime(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    
    return num > 1;
}

console.log(isPosPrime(5)); 
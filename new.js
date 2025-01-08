// find  factorial of a number. write a script for that.
let number=1
function fac(num) {
    console.log(`Factorial of ${num}`);
    
    for( let i=1; i<=num; i++){
        number= number*i
        
    }
    return number
}
console.log(fac(5))


//  write a function that calculates the average of the numbers in an array
let sum = 0
function average(nums) {
    for(let i = 0; i<nums.lenght; i++){
        sum+= nums [i]
        let avg= sum/nums.lenght
    }
    console.log(avg);
    return average

    
}
module.exports={
    fac,
    average
 }
// write a function to add tree numbers
function addThreeNumber(num1,num2,num3) {
    return num1+num2+num3
}
console.log((addThreeNumber(5, 6, 6)));

// write a function that takes three arguments. First two params are multiplied by each other and last param is divided by the result of the product.
function arguments(argu1,argu2,argu3){
    product = argu1*argu2
    result = product/argu3
    return result
}
console.log((arguments(4,2,2,)))
//  write a function to greet someone.
function greetings(name){
   console.log(`Hello this is a cold day ${name}`);

}
greetings('zaynab')

// write a function to check i a number is positive, negative or zero
function checkNumber(num){
    if (num>0){
        return "the number is positive";
    }
    else if(num<0){
        return"the number is negative";
    }
    else{
        return"the number is zero";
    }
}
console.log(checkNumber(5))
console.log(checkNumber(-5))
console.log(checkNumber(0))

// write a function that calculates the square of a number 
function square(number){
    
}


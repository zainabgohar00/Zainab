// FOR LOOP 
// print hello three times
for (let index = 0; index < 3; index++) {
    console.log("hello");
}

// print all items in an Array
let subjects = ["english", "maths", "physics", "computer"]
for (let index = 0; index < subjects.length; index++) {
    const element = subjects[index];
    console.log(element);

}

// print values and keys in an object "employee"
const employee = {
    name: "Ali",
    age: 24,
    email: "aliahmed@gmail.com",
    qualification: "Graduate",
    city: "Karachi",
}
for (const key in employee) {
    {
        const element = employee[key];
        console.log(`The ${key} is ${element}`);
    }
}
// SHORT HAND METHOD (for each)
// subjects.forEach(element => {
// console.log(`${element} is avalaible`);
// });

// write a code that prints the sum of 10 numbers
let sum = 0
for (let i = 0; i < 11; i++) {
    // const element = array[index];
    sum += i

}
console.log(`the sum of 10 numbers is ${sum}`);

// write a code that prints the table of 4
let table = 1
for (let i = 1; i <= 10; i++) {
    table = i * 4
    console.log(`4 x ${i} = ${table}`)
} 
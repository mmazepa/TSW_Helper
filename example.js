/*jshint globalstrict: true, devel: true, esversion: 6, jquery: true */
'use strict';

console.clear();
console.log("--- EXAMPLE.JS ----------");

var message = "Hello World";
console.log(message);
console.log("We are learning ES6");

const f1 = (x,y,...a) =>
{
    return a + ", " + (x+y);
};
console.log(f1(5,7,1));

const pisz = (x) =>
{
    console.log(x);
};
pisz("Hej, jestem tutaj!");

var name = "Mariusz";
console.log("The value in the variable 'name' is: " + name);

for (let i = 0; i < 100; i++)
{
    if (i%21 === 0)
    {
        console.log(i + " modulo 21 is 0.");
    }
}

const ownIf = (a,b) =>
{
    return a > b ? a + " is greater than " + b: b + " is greater than " + a;
};
pisz(ownIf(7,4));
pisz(ownIf(1,15));
pisz(ownIf(3,-17));

console.log("Type of " + 12 + " is " + typeof 12);
console.log("Type of \"Hejka\" is " + typeof "Hejka");
console.log("Type of " + true + " is " + typeof true);
console.log("Type of \"{name:14}\" is " + typeof {name:14});

const sum = (...numbers) =>
{
    return numbers.reduce((a, b) => a + b, 0);
};
console.log("Sum of 1 is " + sum(1));
console.log("Sum of 5, 7 and 1 is " + sum(5,7,1));
console.log("Sum of 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 is " + sum(1,2,3,4,5,6,7,8,9,10));

const silnia = (num) =>
{
    return num <= 0 ? 1 : num * silnia(num-1);
};
for (let i = 3; i <= 6; i++)
{
    console.log("Silnia(" + i + "): " + silnia(i));
}

const person = (firstName, lastName, age) =>
{
    let human = {
        fname: firstName,
        lname: lastName,
        age: age
    };
    return "I am " + human.fname + " " + human.lname + " and I'm " + human.age + " years old.";
};
console.log(person("Mariusz", "Mazepa", 24));

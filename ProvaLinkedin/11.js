/**
 * 
 * 11 - What is wrong with this code?
 
 const foo = {
bar(){
console.log("Hello, world!");
},
name:"Albert",
age: 26,
}

a) The function bar needs to be defined as a key/value pair.

b) (X) Nothing, there are no errors.

c) Trailing commas are not allowed in JavaScript.

d) Functions cannot be declared as properties of objects.
 */


const foo = {
    name:"Albert",
    age: 26,
    bar(){
        return console.log("Hello, world!");
     }
    }

console.log(foo.name);

console.log(foo.age);

console.log(foo.bar());

    


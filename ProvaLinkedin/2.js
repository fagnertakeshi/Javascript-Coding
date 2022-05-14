/*
2 - How do you remove the property name from this object?

const foo = {
name: "Albert"
};

a) ( ) del foo.name;
b) ( ) delete foo.name;
c) ( ) remove foo.name;
d) ( ) delete name from foo;
*/


const foo = {
    name: "Albert"
    };

console.log(foo);

delete foo.name;

console.log(foo);
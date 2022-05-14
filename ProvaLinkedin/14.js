
/*
14 - This program has a problem. What is it?

var a;

var b= (a=3) ? true:false


a) You cannot define a variable without initializing it first

b) You cannot use a ternary operator in the right-hand side of an assignment.

c) The code is using the deprecated var keyword.

d) (X) The condition in the ternary statement is using the assignment operator.


*/



var a;

var b= (a=3) ? true:false


console.log(a);
console.log(b);

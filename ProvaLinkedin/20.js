/**
 * 20 - What is wrong with this line of code?

let result= if ( 3=='3') {42} else {0};

a) [x] The if keyword starts a statement, not an expression.

b) New lines are required after curly braces and semicolons.

c) The == operator is not valid.

d) You cannot use the let keyword in a top-level scope.

 */



let result= function testif(){
            if ( 3=='3') {return 42} else {return 0};}



function kangaroo(x1, v1, x2, v2) {
    // Write your code here
  
    let resto= (x1-x2) % (v2-v1)
    t= (x1-x2) / (v2-v1)
    console.log(t);
    if (resto==0 && t>=0) 
        console.log("YES")
    else
        console.log("NO")
   
}

let x1=0;
let v1=2;
let x2=5;
let v2=3;
kangaroo (x1,v1,x2,v2);



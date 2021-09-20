

let A=[-5,1,2,3,4]


let ans=A[0]

for (let i=1;i<A.length;i++) {
    
    if (A[i] <ans)
        ans=A[i]
}


console.log(ans)


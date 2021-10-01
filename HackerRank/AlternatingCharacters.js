

let s1="ABAABBABTT"
let s2=""
let b=0;


for (let i=0;   i<=s1.length-1;i++) {
    if (s1[i]!=s1[i+1]) {
        s2=s2 + s1[i];
        b=b+1;
    }
}


console.log(s1)
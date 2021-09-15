let s1 = "aardvark";
let s2 = "apple";

for (let i=0;   i<=s1.length-1;i++) {
    console.log(s1[i]);
    if (s2.indexOf(s1[i])>-1)
        console.log("YES")

}

console.log("NO")
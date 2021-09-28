let arr=[1,3,9,9,27,81]

//let arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
//let arr=[1,5,5,25,125];

let r=3;
let n=arr.length;

console.log(n);


var m = new Map()
var l = new Map()


var m3 = new Map()
var m2 = new Map()

   
//hashed list of indices for every value in the array

//let m = {};

for (const num of arr) {
  m[num] = m[num] ? m[num] + 1 : 1;
}

//let l = {};

for (const num of arr) {
  l[num] = l[num] ? l[num] + 0 : 0;
}

let  c=0;


let len = arr.length //1,1,3,9
let count = 0


arr.forEach((ele) => {

    console.log(ele);
    if (m3.get(ele))
        count = count + m3.get(ele)

    if (m2.get(ele))
        m3.set(ele * r, m3.get(ele*r)?m3.get(ele*r)+m2.get(ele):m2.get(ele))
 

    m2.set(ele * r, m2.get(ele * r) ? m2.get(ele * r) + 1 : 1)

    console.log("m2");
    console.log(m2);
    console.log("m3");
    console.log(m3);
})

for(let i=0;i<n-1;++i)
{
  
    m[arr[i]]--;
	if(arr[i]%r==0)
		{
            c+=l[arr[i]/r]*m[arr[i]*r];
		}
    l[arr[i]]++; 


}

console.log(l);
console.log(c);

return c;
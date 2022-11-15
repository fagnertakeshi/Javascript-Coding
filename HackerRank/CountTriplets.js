

var m = new Map()
var l = new Map()

arr=[1,1 ,2 ,4,18 ,88];

let r=3;

for (const num of arr) {
  m[num] = m[num] ? m[num] + 1 : 1;
}

for (const num of arr) {
  l[num] = l[num] ? l[num] + 0 : 0;
}

let  c=0;


for(let i=0;i<arr.length;++i)
{
  
    m[arr[i]]--;
    if(arr[i]%r==0 )
        {
            c+=parseInt((l[arr[i]/r]===undefined)?0:l[arr[i]/r])*parseInt((m[arr[i]*r]===undefined)?0:m[arr[i]*r]);
        }
    l[arr[i]]++; 

}

console.log(c);

//return (c);
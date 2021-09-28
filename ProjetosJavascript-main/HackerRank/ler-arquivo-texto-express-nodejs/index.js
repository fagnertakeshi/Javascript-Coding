const neatCsv = require('neat-csv');

const fs = require('fs')

let arr1=[];

var entrada="";

fs.readFile('\arquivos/file.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  arr1= await neatCsv(data)

var texto = JSON.stringify(arr1);
const arr = texto.split(' ');

//console.log(words);

let n=100000;

let r=2;

let m = {};

for (const num of arr) {
  m[num] = m[num] ? m[num] + 1 : 1;
}

let l = {};

for (const num of arr) {
  l[num] = l[num] ? l[num] + 0 : 0;
}

let  c=0;

console.log(m);
console.log(l);

for(let i=0;i<n-1;++i)
{
  
    m[arr[i]]--;
	if(arr[i]%r==0)
		{
			c+=l[arr[i]/r]*m[arr[i]*r];
           // console.log("entre aqui");
		}
    l[arr[i]]++; 


}

console.log(c);


return c;



})
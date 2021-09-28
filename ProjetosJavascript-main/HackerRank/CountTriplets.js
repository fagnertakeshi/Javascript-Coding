function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


readTextFile("file:///C:/Users/4175/Desktop/ProjetosJavascript-main/ProjetosJavascript-main/HackerRank/input06.txt");

//let arr=[1,3,9,9,27,81]
let arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
let r=1;
let n=arr.length;

    
//hashed list of indices for every value in the array

let m = {};

for (const num of arr) {
  m[num] = m[num] ? m[num] + 1 : 1;
}

let l = {};

for (const num of arr) {
  l[num] = l[num] ? l[num] + 0 : 0;
}

let  c=0;

for(let i=0;i<n-1;++i)
{
  
    m[arr[i]]--;
	if(arr[i]%r==0)
		{
			c+=l[arr[i]/r]*m[arr[i]*r];
		}
    l[arr[i]]++; 


}

return c;
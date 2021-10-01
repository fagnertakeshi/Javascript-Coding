
let score=10;

arr=[[25,30,"A"],[20,25,"B"],[15,20,"C"],[10,15,"D"],[5,10,"E"],[0,5,"F"]];

console.log(arr[0])

for(let i=0;i<arr.length;i++){
    if (score>arr[i][0] && score <=arr[i][1])
        console.log(arr[i][2]);
}


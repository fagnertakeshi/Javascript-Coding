

let arr = [
[-1, 1, -1, 0 ,0, 0],
[0, -1 ,0 ,0 ,0 ,0],
[-1 ,-1 ,-1 ,0, 0, 0],
[0 ,-9, 2, -4, -4 ,0],
[-7 ,0 ,0 ,-2 ,0 ,0],
[0 ,0 ,-1 ,-2 ,-4 ,0]]



let sum=0;
let firtsum= parseInt(arr[0][0]) + parseInt(arr[0][1])+ parseInt(arr[0][2]) +  parseInt(arr[1][1]) + parseInt(arr[2][0])  +parseInt(arr[2][1])+ parseInt(arr[2][2]);


for (let i=0;i<arr.length;i++) {
    for (let j=0;j<arr.length;j++) {
        if ((j<arr.length-2) && (i<arr.length-2)) {
            //console.log(j);
            sum= parseInt(arr[i][j]) + parseInt(arr[i][j+1])+ parseInt(arr[i][j+2]) +  parseInt(arr[i+1][j+1]) + parseInt(arr[i+2][j])  +parseInt(arr[i+2][j+1])+ parseInt(arr[i+2][j+2])
            if (sum>firtsum)
                firtsum=sum;
        }
        
    }
}

console.log(firtsum);
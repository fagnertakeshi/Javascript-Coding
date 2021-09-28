
arr=[4,3,1,2]


minimumSwaps(arr)

function minimumSwaps(arr) {

let aux;

let t;

let numswaps=0

for (let i=0;i<arr.length;i++) {
    
    if (i+1!=arr[i]) { 

        t=i;
        do {
            t+=1
        }
        while(arr[t]!=(i+1))              
        
        aux=arr[t];
        arr[t]=arr[i];
        arr[i]=aux;
        console.log(arr)
        numswaps++;
        console.log(numswaps)

    }
         
}

console.log(arr)


}
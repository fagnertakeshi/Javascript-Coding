arr=[1,2,2,3,3,4,6,6]

const counts = {};

for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log( Object.keys(counts)[Object.keys(counts).length - 2]);


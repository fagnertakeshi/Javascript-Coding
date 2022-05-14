/*5 - What statement can be used to skip an iteration in a loop?

a) continue
b) break
c) skip
d) next */


let i=0;

for (i=0;i<10;i++){

    if (i=5) {
        console.log(i);
        break;
    }

}

console.log('Quebrou no ' + i);

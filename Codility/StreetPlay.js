

lights= [[1,1,5],
        [2,2,5],
        [3,3,5]]


let leftSide=lights[0][0];

let rightSide=lights[0][2];



for (let i=1;i<lights.length;i++){

    if (leftSide<lights[i][1] ) leftSide=lights[i][1]
    if (rightSide>lights[i][2] ) rightSide=lights[i,2]   

}

console.log(leftSide)

console.log(rightSide)



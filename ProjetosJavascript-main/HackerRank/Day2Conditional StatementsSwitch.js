
let s="abcd"
let firstchar=s.substring(0,1);
let result=['A','B','C','D'];

let obj= [['a','e','i','o','u'],['b','c','d','f','g'],['h','j','k','l','m'],['n','p','q','r','s','t','v','w','x','y','z']]
console.log(firstchar);

for(let i=0;i<obj.length;i++){
    for(let j=0;j<obj[i].length;j++){
        if (firstchar==obj[i][j])
            console.log(result[i])
    }
}
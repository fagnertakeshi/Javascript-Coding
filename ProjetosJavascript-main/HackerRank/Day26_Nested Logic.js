
s="24 12 1898\n18 9 1898"
//s="31 8 2004\n20 1 2004"
var array1 = s.split("\n")
var data1 = array1[0].split(" ")
var data2 = array1[1].split(" ")

let d1,m1,y1;
let d2,m2,y2;
let hackos=0;


d1=parseInt(data1[0]);
d2=parseInt(data2[0]);
m1=parseInt(data1[1]);
m2=parseInt(data2[1]);
y1=parseInt(data1[2]);
y2=parseInt(data2[2]);


if (y2==y1){
    if (m2==m1){
        if (d2>=d1)
            hackos=0;
        else
            hackos=15*(d1-d2);
    } else {
        if (m2>=m1)
            hackos=0
        else
            hackos=500*(m1-m2);
    }
} else
    if (y2>=y1)
        hackos=0;
    else
        hackos=10000;

    

console.log(hackos);


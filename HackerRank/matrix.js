contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]


 
 function filterItems(arr) {
    return arr.filter(function(el) {
      return el[1]== 1
    })
  }
 //console.log(filterItems(contests));


 let k=3;

 let imp_count=0;

 // verify how many not important loses we have
 for(var i = 0; i < contests.length; ++i){
     if(contests[i][1] == 0)
         imp_count++;
 }
 
 // ncount= count the numbers of important contest can we win to lose less
 let ncount= contests.length - k - imp_count 
 
 let min=0;


 
 let arrayfilter= filterItems(contests)
 
 
var arr = [[[1, 112.0],[2,5.12],[3,113.1],[4,33.6],[5,85.9],[6,219.9]]];
var values = arrayfilter.map(function(elt) { return elt[0]; });

var indexMenor = arrayfilter.indexOf(Math.min(arrayfilter));

console.log('indexmenor' + indexMenor);


console.log(values)
var min2 = Math.min.apply(null, values);

var max = Math.max.apply(null, values);


console.log(min2);




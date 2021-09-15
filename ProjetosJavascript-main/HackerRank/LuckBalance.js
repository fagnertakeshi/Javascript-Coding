
 function filterItemsZero(arr) {
    return arr.filter(function(el) {
      return el[1]== 0
    })
  }


  function filterItemsOne(arr) {
    return arr.filter(function(el) {
      return el[1]== 1
    })
  }
function luckBalance(k, contests) {
  
  // sum all important elements of array  -- equals 1
  let important = contests.filter(ar => ar[1] === 1).length;

  //  sum all elements of array
  let sumAll = contests.reduce((a, b) => a+b[0],0);
  
  // sort array[0] of matrix
  let sorted = contests.sort((a, b) => a[0] - b[0])
  
  // verify max important contests can lose
  let win = important-k >=0 ?important-k : 0 
  let min = 0

  for(let i=0;  i<sorted.length; i++){
      if(win === 0) break;
      if(sorted[i][1] === 0)continue;
      // sum all minimium sorted array
      min += sorted[i][0];
      win--
  }
  return sumAll - (2*min);

}

contests = [[13, 1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1],[18,0],[13,0]]

console.log(luckBalance(5,contests))
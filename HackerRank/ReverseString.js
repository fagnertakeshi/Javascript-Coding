function reverseString(s) {
    
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse().join("")
        console.log(reverseArray);
    } catch (error) {
        console.log("s.split is not a function");
        console.log("1234");
        
      
    }
}

s="420";

reverseString(s);
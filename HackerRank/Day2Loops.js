

s="javascriptloops"
let arr=s.split('');
let vowel="aieou"
let consonant="qwrtypsdfghjklçzxcvbnm"
let arr_vowel=vowel.split('');
let arr_consonant=consonant.split('');

 
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="a"|arr[i]=="e"|arr[i]=="i"|arr[i]=="o"|arr[i]=="u")
            console.log(arr[i])
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr_consonant.length;j++){
            if (arr[i]==arr_consonant[j])
                console.log(arr[i])
        }
        
    }
 
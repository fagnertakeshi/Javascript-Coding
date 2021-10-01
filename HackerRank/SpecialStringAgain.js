


s="abcbaba"

let n,c,i=0,j,ans=0;

n= s.length;

let retVal = s.length;

for (let i = 0; i < s.length; i++)
        {
            var startChar = s[i];
            let diffCharIdx = -1;
        for (let j = i + 1; j < s.length; j++)
            {
                var currChar = s[j];
                if (startChar == currChar)
                {
                    if ((diffCharIdx == -1) ||
                       (j - diffCharIdx) == (diffCharIdx - i))
                        retVal++;
                }
                else
                {
                    if (diffCharIdx == -1)
                        diffCharIdx = j;
                    else
                        break;
                }
            }
        }

        console.log(retVal)




/*
let same_char_count=[];


while(i<n) {
    j=i+1,c=1;
    while(j<n && s[i]==s[j]) {
        ++j,++c;
    }

    //total substrings which have all same char(s)
    ans+=(c*(c+1))>>1;

    console.log((c*(c+1)));
    same_char_count[i]=c;
    i=j;
}

for(j=1;j<n-1;++j) {
    if(s[j]==s[j-1]) {
        same_char_count[j] = same_char_count[j-1];
    }

    //odd length substr(s) which has middle element diiferent
    if(s[j-1]==s[j+1] && s[j]!=s[j-1]) {
        ans += Math.min(same_char_count[j-1], same_char_count[j+1]);
    }
}

console.log(ans);
*/

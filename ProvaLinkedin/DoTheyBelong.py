import math
import os
import random
import re
import sys

#
# Complete the 'pointsBelong' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER x1
#  2. INTEGER y1
#  3. INTEGER x2
#  4. INTEGER y2
#  5. INTEGER x3
#  6. INTEGER y3
#  7. INTEGER xp
#  8. INTEGER yp
#  9. INTEGER xq
#  10. INTEGER yq
#

        
def pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq):
    # Write your code here
    ab = math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
    ac = math.sqrt((x1 - x3)**2 + (y1 - y3)**2)
    bc = math.sqrt((x2 - x3)**2 + (y2 - y3)**2)
    
    
        
    # Check if the sum of any two sides is greater than the third side
    if (ab + ac > bc) and (ab + bc > ac) and (ac + bc > ab):
        boolp=0
        boolq=0
        p1 = (x2-x1)*(yp-y1)-(y2-y1)*(xp-x1)
        p2 = (x3-x2)*(yp-y2)-(y3-y2)*(xp-x2)
        p3 = (x1-x3)*(yp-y3)-(y1-y3)*(xp-x3)
    
        if (p1<0 and p2<0 and p3<0) or (p1>0 and p2>0 and p3>0):
            boolp=1
    
        q1 = (x2-x1)*(yq-y1)-(y2-y1)*(xq-x1)
        q2 = ((x3-x2)*(yq-y2))-((y3-y2)*(xq-x2))
        q3 = (x1-x3)*(yq-y3)-(y1-y3)*(xq-x3)

        print('entrei aqui')
      
        print (abs(((x3-x2)*(yq-y2)))-(abs((y3-y2)*(xq-x2))))
   
        if (q1<0 and q2<0 and q3<0) or (q1>0 and q2>0 and q3>0):
            boolq=1
            
     
            
        if (boolp==1 and boolq==0):
            return 1
        if (boolp==0 and boolq==1):
            return 2
        if (boolp==1 and boolq==1):
            return 3
        if (boolp==0 and boolq==0):
            return 4   
            
    else:
            return 0


x1=3
y1=1
x2=7
y2=1
x3=5
y3=5
xp=3
yp=1
xq=0
yq=0



result = pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq)

print(result)
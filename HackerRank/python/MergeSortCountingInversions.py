#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countInversions' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def countInversions(arr):
  # Base case: array of length 1 is already sorted
  if len(arr) == 1:
    return 0

  # Split array into left and right halves
  mid = len(arr) // 2
  left = arr[:mid]
  right = arr[mid:]

  # Recursively sort and count inversions in left and right halves
  inversions = countInversions(left) + countInversions(right)

  # Merge left and right halves and count cross-inversions
  i = j = 0
  for k in range(len(arr)):
    if j >= len(right) or (i < len(left) and left[i] <= right[j]):
      arr[k] = left[i]
      i += 1
    else:
      arr[k] = right[j]
      j += 1
      inversions += len(left) - i

  return inversions

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        arr = list(map(int, input().rstrip().split()))

        result = countInversions(arr)

        fptr.write(str(result) + '\n')

    fptr.close()

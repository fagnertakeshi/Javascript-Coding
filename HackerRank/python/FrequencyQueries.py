#!/bin/python3

import math
import os
import random
import re
import sys

def freqQuery(queries):
  # Initialize empty dictionary to count frequencies
  frequencies = {}
  results = []

  # Process queries
  for query in queries:
    # Increment frequency
    if query[0] == 1:
      if query[1] in frequencies:
        frequencies[query[1]] += 1
      else:
        frequencies[query[1]] = 1
    # Decrement frequency
    elif query[0] == 2:
      if query[1] in frequencies and frequencies[query[1]] > 0:
        frequencies[query[1]] -= 1
    # Check if frequency exists
    elif query[0] == 3:
      if query[1] in frequencies.values():
        results.append(1)
      else:
        results.append(0)

  return results


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    queries = []

    for _ in range(q):
        queries.append(list(map(int, input().rstrip().split())))

    ans = freqQuery(queries)

    fptr.write('\n'.join(map(str, ans)))
    fptr.write('\n')

    fptr.close()

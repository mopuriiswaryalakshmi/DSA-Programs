/* Hashing 1

Check if there exist a subarray with sum = 0

arr[]: 2 2 1 -3 4 3 1 -2 -3 2
pf[]:  2 4 5 2  6 9 10 8 5 7

1. If we have repetation in pf[] there will be subarray with sum 0 
Edge Case: If PF contains 0, subarray with sum 0 present.

2. hashset
Insert all PF elements in hashset

3. if(hs.size() < N or 0 in hs) {
// repetation
return true
} else {
 return false}

*/
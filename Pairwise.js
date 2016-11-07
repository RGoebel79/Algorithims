/* Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values. */




function pairwise(arr, arg) {
  var num1 = 0;
  var arr1=arr.slice();
  for(var i = 0; i< arr1.length; i++){
    for(var j =i + 1; j< arr1.length;j++){
      if (arr1[i]+arr1[j]===arg){
      	        num1 += i + j;
        arr1[i] = arr1[j] = NaN;
      }
    }
  }
    return num1;
}

pairwise([0, 0, 0, 0, 1, 1], 1); //test case
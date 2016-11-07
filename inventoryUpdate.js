
function updateInventory(arr1, arr2) {
    
  var num1= [];
  var num2= [];
  var str1= [];
  var str2= [];
  var len;
  var arr = [];
  var ray1 = arr1;
  var ray2 = arr2;
  if( arr2.length ===0 ){
    return arr1;}
  for(var i=0; i<arr1.length;i++){
    num1.push(arr1[i][0]);
    str1.push(arr1[i][1]);
    num2.push(arr2[i][0]);
    str2.push(arr2[i][1]);
   }
  
  for (var j = 0; j<arr1.length;j++){
    for(var k =0; k<arr2.length;k++){
    var temp = 0;
    if (str1[j] === str2[k]){
      temp = num1[j]+num2[k];
      arr.push([temp, str1[j]]);
      ray1.splice(j, 1,["xx"]);
      ray2.splice(k, 1,["xx"]);
    }
  }
}
  
  
  function filt(a){
    return a!="xx";
  }
  ray1 = ray1.filter(filt);
  ray2 = ray2.filter(filt);
  var arrray = arr.concat(ray1, ray2);
  
  arrray.sort(function(a, b){
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
});
  
  
    return arrray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv,newInv);

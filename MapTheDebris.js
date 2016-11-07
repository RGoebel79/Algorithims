function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var ans;
  var pi2  = 2 * Math.PI;
  var axis;
  var arr1 = [];
  var orb = "orbitalPeriod";
  
  for (var i = 0; i < arr.length; i++){
    axis = Math.pow(earthRadius + arr[i].avgAlt, 3);
    ans = Math.round(pi2*Math.sqrt(axis/GM));
    arr[i].avgAlt = ans;
    arr[i].orbitalPeriod = ans;
    delete arr[i].avgAlt;
   
  }
  
  return arr;
 
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); //test case

function makeFriendlyDates(arr) {
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var arr1 = arr[0].split("-", 3);
  var arr2 = arr[1].split("-", 3);
  var year1 = arr[0].split("",[4]).join("");
  var year2 = arr[1].split("",[4]).join("");
  var mon1 = Math.round(arr[0].split("-").slice("").join("")) - Math.round(arr[1].split("-").slice("").join(""));
  var mon2 = Math.round(arr[1].split("-").slice(1,2).join(""));
  var mon3 = Math.round(arr[0].split("-").slice(1,2).join(""));
  var final1 = [];
  var final2 = [];
  var vary;
  var day;
  var day2;
 
  function xlate(array){
    final1 =[];
  final1.push(month[array[1]-1]," ");
  vary = array[2][1];
  if(vary==1){
    final1.push(Math.round(array[2]),"st");
  } else if (vary==2){
    final1.push(Math.round(array[2]),"nd");
  } else if(array[2]==13||vary==0||vary>3&&vary<10){
    final1.push(Math.round(array[2]),"th");
  } else if (vary==3){
    final1.push(Math.round(array[2]),"rd");
  } 
 
  
  final1=final1.join("");
 
  return final1;}
  
  day = xlate(arr1);
  day2 = xlate(arr2);
  
  if(year1==2016&&year1==year2&&mon2==mon3){
    day2 = day2.slice(-3);
    final2.push(day, day2);
  }
  else if(year1==2016&&year2<2018){
    
    final2.push(day, day2);
  }
   else if(mon1===0){
     day = day + ", " +  year1;
    final2.push(day);
  }
  else
  if(mon1>-10000&&mon1<0){
    
    day = day + ", " +  year1;
    final2.push(day, day2);
  } else {
    day = day + ", " +  year1;
    day2 = day2 + ", " +  year2;
    final2.push(day, day2);
  }
 return final2; 
}

makeFriendlyDates(["2016-12-01", "2017-02-03"]); //test case

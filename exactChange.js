
function checkCashRegister(price, cash, cid) {
  var change= [];
  var num1 = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var billnames = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"];
  var ch = [];
  var cd = cid;
  var total=0;
  var chamt = cash - price;
  var val;
  
 
  for (var i = 0;i<cid.length;i++) {
    total += cid[i][1];
    
   }
  
   if (total < chamt) {
    return "Insufficient Funds";
  } else if (chamt === total) {
    return "Closed";
  }
 
 var arr = -1;
 var loop = -1;
  
  
 
  for (var j = 8; j> -1; j--){
    loop = 0;
    val = 0;  
    var bills = Math.round(cd[j][1]/num1[j],-2);
    
    change.push(bills);
    
    
    while (chamt >= num1[j] && bills > 0 ) {
      chamt -= num1[j];
      total -= num1[j];
      bills -= 1;
      chamt = chamt.toFixed(2);
      val += num1[j];
    }
      
      if(val > 0.00) {
        ch.push([billnames[j],val]);
      }
      
  }   
   if (chamt > 0){
     return "Insufficient Funds";
   }

  // Here is your change, ma'am.
  return ch;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

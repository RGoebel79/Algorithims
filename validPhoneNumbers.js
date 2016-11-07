
function telephoneCheck(str) {
  var str2 = str.replace( /\w/gi,"");
  var str3 = str.replace(/\W/gi,"");
  if(str3.length <= 9 || str3.length >= 12 || str3.indexOf(2) === 0) {return false;}
  else if(str2 === " () -" && str.indexOf("1") === 0) {
    return true;
  } else if(str2 === "--" || str2 === " --" || str2 === "()-" || str2 === "() -" || str2 === "" || str2 ==="   " ){
    return true;
  } else {return false;}
  
  return str2;
}



telephoneCheck("555-5555"); //test case

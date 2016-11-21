var firstUniqChar = function(s) {
    var len = s.length;
    if (s === "") {return -1;}
    else if (len<2){return 0;}
    
    for (var i = 0; i < s.length; i++){
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
            return i;
        }
    }
    
   return -1;
};
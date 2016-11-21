var romanToInt = function(s) {
    if(s===""){return false;}
    else if(s===" "){return false;}
    var end = 0;
    var copy = s;
    for(var i=0;i<copy.length;i++){
        if (copy[i]==="M"){
            end+=1000;
        }  else if (copy[i]==="C"&& copy[i+1]==="M"){
            end+=900;
            i++;
        } else if (copy[i]==="C"&& copy[i+1]==="D"){
            end+=400
            i++;
        } else if (copy[i]==="D"){
            end+=500;
        } else if (copy[i]==="C"){
            end+=100;
        } else if (copy[i]==="X"&&copy[i+1]==="C"){
            end+=90;
            i++;
        } else if (copy[i]==="L"){
            end+=50;
        } else if (copy[i]==="X"&& copy[i+1]==="L"){
            end+=40;
            i++;
        } else if (copy[i]==="X"){
            end+=10;
        } else if (copy[i]==="I" && copy[i+1]==="X"){
            end+=9;
            i++;
        } else if (copy[i]==="I" && copy[i+1]==="V"){
            end+=4;
            i++;
        } else if (copy[i]==="V"){
            end+=5;
        } else if (copy[i]==="I"){
            end+=1;
        }
    } 
    return end;
};
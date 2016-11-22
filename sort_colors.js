var sortColors = function(nums) {
    var red = 0, white = 0, blue = 0;
    var len = nums.length;
    
    //tally all colors into an array
    for (var i=0;i<len; i++){
        if(nums[i]===0){
            red++;
            
        } else if(nums[i]===1){
            white++;
           
        } else if(nums[i]===2){
            blue++;
          
        }
    }
    //create an array from the array of colors counted
    nums.splice(0);
    while(red>0){
        nums.push(0);
        red--;
    }
    while(white>0){
        nums.push(1);
        white--;
    }
    while(blue>0){
        nums.push(2);
        blue--;
    }
    return nums;
};
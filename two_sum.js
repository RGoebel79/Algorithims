var twoSum = function(nums, target) {
    var ans = [];
    
    for(var i = 0; i < nums.length; i++){
        for (var j = 0; j< nums.length; j++){
            if (nums[i]+nums[j]===target && j !== i){
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    }
    return undefined;
};
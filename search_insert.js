var searchInsert = function(nums, target) {
    //if case to handle fringe cases
    if (nums.indexOf(target)>=0){
        return nums.indexOf(target);
    } else if (target > nums[nums.length-1]){
        return nums.length;
    } else if (target < nums[0]){
        return 0;
    }
    
    var left = 0;
    var right = nums.length;
    

    //binary tree type seach for target
    while (left <= right){
        var mid = Math.floor((right-left)/2) + left;
        if (nums[mid] == target){
            return mid;
        } else if (nums[mid] < target){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return left;
};
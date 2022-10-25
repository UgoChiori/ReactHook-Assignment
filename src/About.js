var removeElement = function(nums, val) {
    for (let a = nums.length - 1; a >= 0; a--) {
        if(nums[a] === val) nums.splice( a, 1);
    }
}
return nums.length;
    



disabled={canPreviousPage}
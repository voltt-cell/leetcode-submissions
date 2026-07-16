/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let u=0
    for(let i=0;i<nums.length;i++)
    {
    
        if(nums[u]!==nums[i])
        {
           nums[++u]=nums[i]
        }
    }
    return u + 1
};
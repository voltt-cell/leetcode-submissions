/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let u=0
    // for(let i=0;i<nums.length;i++)
    // {
    
    //     if(nums[u]!==nums[i])
    //     {
    //        nums[++u]=nums[i]
    //     }
    // }
    // return u + 1


    let r=1;
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i]!=nums[i-1])
        {
            nums[r]=nums[i]
            r++
        }
    }
    return r
};
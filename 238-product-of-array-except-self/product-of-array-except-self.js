/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result=new Array(nums.length).fill(0)

    let prefix = 1

    for(let i=0;i<nums.length;i++)
    {
        result[i]=prefix
        prefix*=nums[i]
    }

    let sufix=1

    for(let i=nums.length-1;i>=0;i--)
    {
        result[i]*=sufix
        sufix*=nums[i]
    }

    
    return result;
};
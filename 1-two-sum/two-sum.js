/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const x=new Map();

   nums.forEach((n,i)=>x.set(n,i))

   for(let i=0;i<nums.length;i++)
   {
    const a=target-nums[i];
    if(x.has(a) && x.get(a)!==i)
    {
        return [i,x.get(a)]
    }
   }

};
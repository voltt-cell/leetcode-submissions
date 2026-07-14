/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const count=new Map()

   nums.forEach((n,i)=>{
    count.set(n,i)
   })

   for(let i=0;i<nums.length;i++)
   {
    let secondValue=target-nums[i]
    if(count.has(secondValue) && count.get(secondValue)!==i)
    {
        return [i,count.get(secondValue)]
    }
   }

};
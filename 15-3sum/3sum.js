/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3)
    {
        return []
    }
    nums.sort((a,b)=>a-b)
    let r=new Set()

    for(let i=0;i<nums.length-2;i++)
    {
        let j=i+1
        let k=nums.length-1
        let element = nums[i]
        while(j<k)
        {
            let sum=element + nums[j] + nums[k]
            if(sum===0)
            {
                r.add(JSON.stringify([element,nums[j],nums[k]]))
                j++;k--
            }
            else if(sum<0)
            {
                j++
            }
            else k--
        }
    }

    return Array.from(r).map((item)=>JSON.parse(item))
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//approach 1
//    let freq=new Map()

//    nums.forEach((n)=>freq.set(n,(freq.get(n)||0)+1))

//    for(let [key,value] of freq)
//    {
//     if(value!==1)
//     return true
//    }
//    return false

//approach 2
    const s = new Set(nums); return s.size !== nums.length

// approach 3
    // nums.sort((a,b)=>a-b);

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] === nums[i-1]) return true;
    // }

    // return false;

    
};
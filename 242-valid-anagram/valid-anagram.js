/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const count=new Map()
    if(s.length!==t.length)
    {
        return false
    }

for (let char of s)
{
    count.set(char,(count.get(char)||0)+1)
}
  for (let char of t)
{
    if(!count.has(char)) return false
    count.set(char,count.get(char)-1)
    if(count.get(char)===0) count.delete(char)
}
  
  return true

};
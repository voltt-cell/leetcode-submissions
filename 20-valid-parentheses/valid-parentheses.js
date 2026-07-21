/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     if(s.length===0 || s.length%2!==0)
    {return false}
    const ss=[]
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

   
  for(let i=0;i<s.length;i++)
  {
    if(s[i]==='(' ||s[i]==='{' || s[i]==='[')
    {
        ss.push(s[i])
    }
    else {
        if(ss.pop()!==map[s[i]])
        {return false}
    }
  }
  return ss.length===0
    
};
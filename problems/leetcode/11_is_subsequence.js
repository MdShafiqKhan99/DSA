/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sIndex = 0;

  if(t.length === 0 && s.length === 0) return true;
  if(t.length < s.length) return false;

  for (const char of t) {
    if(sIndex === s.length) break;
    if(char === s[sIndex]) sIndex++;
  }

  return sIndex === s.length;

};
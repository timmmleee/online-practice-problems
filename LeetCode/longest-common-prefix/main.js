var longestCommonPrefix = function (strs) {
  let length = strs.length;
  if (length === 0){
    return "";
  }

  let word = strs[0];
  for (let i = 1; i < length; i++){
    while (strs[i].indexOf(word) !== 0) {
      word = word.substring(0, word.length - 1);
      if (word === ""){
        return ""
      }
    }
  }
  return word;
};

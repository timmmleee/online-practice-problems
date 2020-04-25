function camelcase(s) {
  let count = 1;
  for (let char = 0; char < s.length; char++){
    if (s[char] == s[char].toUpperCase()){
      count++
    }
  }
  return count;
}

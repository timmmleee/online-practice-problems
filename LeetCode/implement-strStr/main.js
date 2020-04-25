var strStr = function (haystack, needle) {
  let indexPosition = null;
  if (needle == ''){
    indexPosition = 0;
  } else {
    indexPosition = haystack.indexOf(needle);
  }
  return indexPosition;
};

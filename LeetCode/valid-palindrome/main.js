var isPalindrome = function (s) {
  const expression = /[\W_]g;
  const lowerCaseString = s.toLowerCase().replace(expression, '');
  const reverseString = lowerCaseString.split('').reverse().join('');

  return lowerCaseString === reverseString
};

/**
Notes:
/[\W_]g : RegEx that checks for non-characters, _ (underscore) for the entire string
.toLowerCase().replace(expression, ''): Replaces the non-word characters and _ with empty space
**/

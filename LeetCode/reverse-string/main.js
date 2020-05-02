var reverseString = function (s) {
  s.reverse();
};

//Use reverseString(s) if s is equal to an array with elements

/*
Problem:
Reverse the sentence, "Hi, my name is Tim".
Is the sentence hello a string?
Do I include the whitespaces as well? If no, use trim();

function reverseString(sentence) {
  let a = sentence.split('');
  let b = [];
  for (let i = a.length - 1; i >= 0 ; i--){
    b.push(a[i]);
  }
  let c = b.join("");
  return c;
}

function reverseString(str){
  let splitString = str.split('');
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');
  return joinArray;
}

function reverseString(str){
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}
*/

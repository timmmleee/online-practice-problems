var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
};

/*
pop() -  removes the last element from an array and returns that element.
         This method changes the length of the array.
unshift() - adds one or more elements to the beginning of an array
            and returns the new length of the array
*/

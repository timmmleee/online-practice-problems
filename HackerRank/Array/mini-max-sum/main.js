function miniMaxSum(arr) {
  let min = null;
  let max = null;
  let array = [];
  
  arr = arr.sort();
  array = arr.reduce((a, b) => a + b);
  min = array - arr[arr.length - 1];
  max = array - arr[0];

  console.log(`${min} ${max}`)
}

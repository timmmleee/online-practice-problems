function diagonalDifference(arr) {
  let diagonal1 = null;
  let diagonal2 = null;
  let difference = null;

  for (let row = 0; row < arr.length; row++){
    diagonal1 += arr[row][row];
    diagonal2 += arr[row][arr.length - row - 1]
  }
  difference = Math.abs(diagonal1 - diagonal2);
  return difference;
}

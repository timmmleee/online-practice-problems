function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let total = arr.length;

  arr.forEach(num => {
    if(num > 0){
      positive++;
    } else if (num < 0){
      negative++;
    } else if (num === 0){
      zero++
    }
  })
  console.log((positive/total).toFixed(6))
  console.log((negative/total).toFixed(6))
  console.log((zero/total).toFixed(6))
}

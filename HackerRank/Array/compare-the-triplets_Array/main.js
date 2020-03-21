function compareTriplets(a, b) {
  let personA = 0;
  let personB = 0;

  for (let i = 0; i <= a.length - 1; i++){
    if (a[i] > b[i]){
      personA++;
    } else if (a[i] < b[i]){
      personB++;
    }
  }
  return [personA, personB];
}

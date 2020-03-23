function timeConversion(s) {
  const stringSplit = s.slice(0, 8).split(':');
  let output = null;

  if (s.includes('AM')) {
    if (stringSplit[0] === '12'){
      stringSplit[0] = '00'
    }
  } else if (s.includes('PM')) {
    if (stringSplit[0] !== '12'){
      let convertHour = parseInt(stringSplit[0]) + 12;
      let hourTime = convertHour.toString();
      stringSplit.splice(0, 1, hourTime);
    }
  }
  output = stringSplit.join(':')
  return output;
}

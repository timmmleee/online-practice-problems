function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    let roundedUpNum = Math.ceil(grades[i] / 5) * 5;
    let difference = roundedUpNum - grades[i];

    if (grades[i] >= 38) {
      if (difference < 3) {
        grades[i] = roundedUpNum;
      } else if (difference === 3) {
        grades[i] = grades[i]
      }
    } else if (grades[i] < 38) {
      grades[i] = grades[i]
    }
  }
  return grades;
}

"use strict";

String.prototype.isPalindrome = function isPalindrome() {
  const splittedString = this.toLowerCase().split("");
  for (let i = 0; i < splittedString.length; i++) {
    if (splittedString[i] === " ") {
      splittedString.splice([i], 1);
    }
  }
  if (splittedString.join("") === splittedString.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

function getAverageMark(marks) {
  let averageMark = 0;
  for (let i = 0; i < marks.length; i++) {
    averageMark += marks[i] / marks.length;
  }
  const roundedAverage = Math.round(averageMark);
  return roundedAverage;
}

function checkBirthday(birthday) {
  birthday = new Date(birthday).getTime();
  const now = new Date().getTime(),
    diff = now - birthday,
    age = diff / (365 * 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000 * 0.25);
  return age > 18 ? true : false;
}

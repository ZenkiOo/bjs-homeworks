"use strict";

function getResult(a, b, c) {
  let x1, x2, result;
  let x = [];
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    x.push(x1, x2);
    result = `В квадратном уравнении два корня: x₁ = ${x[0]}, x₂ = ${x[1]}`;
    return (x = result);
  } else if (D === 0) {
    x1 = -b / (2 * a);
    x.push(x1);
    result = `В квадратном уравнении один корень: x = ${x}`;
    return (x = result);
  } else if (D < 0) {
    result = "В квадратном уравнении корней нет т.к. D < 0";
    return (x = result);
  }
}

function getAverageMark(marks) {
  let averageMark = 0,
    marksToCount = marks.slice(0, 5);

  if (marks.length > 0) {
    if (marks.length > 5) console.log("Количество оценок больше 5");
    for (let i = 0; i < marksToCount.length; i++) {
      averageMark += marksToCount[i] / marksToCount.length;
    }
  }
  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let now = new Date(),
    result;

  if (now.getFullYear() - dateOfBirthday.getFullYear() >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}
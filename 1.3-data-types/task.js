"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (percent !== percent) {
    return (
      'Параметр "Процентная ставка" содержит неправильное значение: ' +
      window.percent.value
    );
  } else if (contribution !== contribution) {
    return (
      'Параметр "Начальный взнос" содержит неправильное значение: ' +
      window.contribution.value
    );
  } else if (amount !== amount) {
    return (
      'Параметр "Общая стоимость" содержит неправильное значение: ' +
      window.amount.value
    );
  } else {
    let loanBody = amount - contribution,
      todayDate = new Date(),
      monthCount = monthCounter(todayDate, date),
      monthPercent = percent / 100 / 12,
      monthlyPayment =
        loanBody *
        (monthPercent + monthPercent / ((monthPercent + 1) ** monthCount - 1)),
      totalAmount = monthlyPayment * monthCount;

    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);

    function monthCounter(d1, d2) {
      let months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth() + 1;
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }
  }
}

function getGreeting(name) {
  if (!name || name == "null" || name == "undefined") {
    name = "Анон";
  }
  let greeting = `Привет, мир! Меня зовут ${name}`;
  return greeting;
}

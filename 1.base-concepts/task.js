'use strict'

function solveEquation(a, b, c) {
  let arr = {};
  if (a == 0) {
    return folse;
  }
  let D = Math.pow(b, 2) - 4 * a * c;
  arr = D;

  if (D < 0) {
    arr = [];
  }
  if (D == 0) {
    arr = [-b / (2 * a)];
  } else if (D > 0) {
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    arr = tmp;
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

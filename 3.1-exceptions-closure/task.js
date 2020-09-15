"use strict";

function parseCount(num) {
  const number = Number.parseInt(num, 10);
  if (Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(val) {
  try {
    return parseCount(val);
  } catch {
    return "Невалидное значение";
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || c + b < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let p = this.getPerimeter() / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      3
    );
  }
}

function getTriangle(a, b, c) {
  const errorMessage = "Ошибка! Треугольник не существует";
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea() {
        return errorMessage;
      },
      getPerimeter() {
        return errorMessage;
      },
    };
  }
}

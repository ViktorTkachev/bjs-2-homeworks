function parseCount(value) {
  let arg = parseInt(value);
  if (isNaN(arg)){
    throw new Error("Невалидное значение");
  }
  return arg;
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch(error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle (a, b, c);
  } catch(error) {
    let err = () => "Ошибка! Треугольник не существует";
    return {
      getPerimeter: err,
      getArea: err
    }
  }
}

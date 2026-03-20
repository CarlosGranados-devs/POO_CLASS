import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Figura {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

class Cuadrado extends Figura {
  constructor(private lado: number) { super(); }
  calcularArea() { return this.lado * this.lado; }
  calcularPerimetro() { return this.lado * 4; }
}

class Rectangulo extends Figura {
  constructor(private a: number, private b: number) { super(); }
  calcularArea() { return this.a * this.b; }
  calcularPerimetro() { return 2 * (this.a + this.b); }
}

class Circulo extends Figura {
  constructor(private r: number) { super(); }
  calcularArea() { return Math.PI * this.r ** 2; }
  calcularPerimetro() { return 2 * Math.PI * this.r; }
}

rl.question("Cuadrado, Rectangulo o Circulo: ", (tipo) => {
  if (tipo === "Cuadrado") {
    rl.question("Lado: ", (l) => {
      const c = new Cuadrado(Number(l));
      console.log(c.calcularArea(), c.calcularPerimetro());
      rl.close();
    });
  } else if (tipo === "Rectangulo") {
    rl.question("Ancho: ", (a) => {
      rl.question("Alto: ", (b) => {
        const r = new Rectangulo(Number(a), Number(b));
        console.log(r.calcularArea(), r.calcularPerimetro());
        rl.close();
      });
    });
  } else {
    rl.question("Radio: ", (r) => {
      const c = new Circulo(Number(r));
      console.log(c.calcularArea(), c.calcularPerimetro());
      rl.close();
    });
  }
});
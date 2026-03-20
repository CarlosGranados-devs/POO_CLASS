import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Empleado {
  abstract calcularSalario(): number;
}

class Horas extends Empleado {
  constructor(private h: number, private t: number) { super(); }
  calcularSalario() { return this.h * this.t; }
}

class Fijo extends Empleado {
  constructor(private s: number) { super(); }
  calcularSalario() { return this.s; }
}

class Comision extends Empleado {
  constructor(private v: number, private p: number) { super(); }
  calcularSalario() { return this.v * this.p; }
}

rl.question("Horas, Fijo o Comision: ", (r) => {
  if (r === "Horas") {
    rl.question("Horas: ", (h) => {
      rl.question("Tarifa: ", (t) => {
        console.log(new Horas(Number(h), Number(t)).calcularSalario());
        rl.close();
      });
    });
  } else if (r === "Fijo") {
    rl.question("Salario: ", (s) => {
      console.log(new Fijo(Number(s)).calcularSalario());
      rl.close();
    });
  } else {
    rl.question("Ventas: ", (v) => {
      rl.question("Porcentaje: ", (p) => {
        console.log(new Comision(Number(v), Number(p)).calcularSalario());
        rl.close();
      });
    });
  }
});
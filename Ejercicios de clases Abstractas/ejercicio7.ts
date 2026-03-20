import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Transporte {
  abstract calcularCosto(d: number): number;
}

class Taxi extends Transporte {
  calcularCosto(d: number) { return d * 1.5; }
}

class Bus extends Transporte {
  calcularCosto(d: number) { return d * 0.5; }
}

class Uber extends Transporte {
  calcularCosto(d: number) { return d * 2; }
}

rl.question("Taxi, Bus o Uber: ", (t) => {
  rl.question("Distancia: ", (d) => {
    let tr: Transporte;

    if (t === "Taxi") tr = new Taxi();
    else if (t === "Bus") tr = new Bus();
    else tr = new Uber();

    console.log(tr.calcularCosto(Number(d)));
    rl.close();
  });
});
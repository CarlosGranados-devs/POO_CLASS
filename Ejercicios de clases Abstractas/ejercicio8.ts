import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Producto {
  constructor(protected precio: number) {}
  abstract calcularPrecioFinal(): number;
}

class Electronico extends Producto {
  calcularPrecioFinal() { return this.precio * 1.15; }
}

class Ropa extends Producto {
  calcularPrecioFinal() { return this.precio * 0.9; }
}

class Alimento extends Producto {
  calcularPrecioFinal() { return this.precio * 1.05; }
}

rl.question("Electronico, Ropa o Alimento: ", (t) => {
  rl.question("Precio: ", (p) => {
    let prod: Producto;

    if (t === "Electronico") prod = new Electronico(Number(p));
    else if (t === "Ropa") prod = new Ropa(Number(p));
    else prod = new Alimento(Number(p));

    console.log(prod.calcularPrecioFinal());
    rl.close();
  });
});
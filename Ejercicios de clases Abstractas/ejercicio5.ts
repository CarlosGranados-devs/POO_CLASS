import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Pago {
  abstract procesarPago(): void;
}

class Efectivo extends Pago {
  procesarPago() { console.log("Pago en efectivo"); }
}

class Tarjeta extends Pago {
  procesarPago() { console.log("Pago con tarjeta"); }
}

class Transferencia extends Pago {
  procesarPago() { console.log("Transferencia realizada"); }
}

rl.question("Efectivo, Tarjeta o Transferencia: ", (r) => {
  let p: Pago;

  if (r === "Efectivo") p = new Efectivo();
  else if (r === "Tarjeta") p = new Tarjeta();
  else p = new Transferencia();

  p.procesarPago();
  rl.close();
});
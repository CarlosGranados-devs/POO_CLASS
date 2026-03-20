import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Vehiculo {
  abstract mover(): void;
}

class Carro extends Vehiculo {
  mover(): void { console.log("El carro se mueve"); }
}

class Bicicleta extends Vehiculo {
  mover(): void { console.log("La bicicleta pedalea"); }
}

class Motocicleta extends Vehiculo {
  mover(): void { console.log("La moto acelera"); }
}

rl.question("Elige: Carro, Bicicleta o Motocicleta: ", (r) => {
  let v: Vehiculo;

  if (r === "Carro") v = new Carro();
  else if (r === "Bicicleta") v = new Bicicleta();
  else v = new Motocicleta();

  v.mover();
  rl.close();
});
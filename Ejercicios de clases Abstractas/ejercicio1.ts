import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Animal {
  abstract hacerSonido(): void;
}

class Perro extends Animal {
  hacerSonido(): void { console.log("Guau"); }
}

class Gato extends Animal {
  hacerSonido(): void { console.log("Miau"); }
}

class Vaca extends Animal {
  hacerSonido(): void { console.log("Muuu"); }
}

rl.question("Elige: Perro, Gato o Vaca: ", (respuesta) => {
  let animal: Animal;

  if (respuesta === "Perro") animal = new Perro();
  else if (respuesta === "Gato") animal = new Gato();
  else animal = new Vaca();

  animal.hacerSonido();
  rl.close();
});
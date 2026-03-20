import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Notificacion {
  abstract enviar(): void;
}

class Email extends Notificacion {
  enviar() { console.log("Email enviado"); }
}

class SMS extends Notificacion {
  enviar() { console.log("SMS enviado"); }
}

class WhatsApp extends Notificacion {
  enviar() { console.log("WhatsApp enviado"); }
}

rl.question("Email, SMS o WhatsApp: ", (r) => {
  let n: Notificacion;

  if (r === "Email") n = new Email();
  else if (r === "SMS") n = new SMS();
  else n = new WhatsApp();

  n.enviar();
  rl.close();
});
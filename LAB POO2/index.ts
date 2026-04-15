import * as readline from "readline";

abstract class Consulta {
  private precioBase: number;

  constructor(precio: number) {
    this.precioBase = precio;
  }

  protected getPrecioBase(): number {
    return this.precioBase;
  }

  protected calcularDescuento(codigo: string): number {
    const ultimosDos = parseInt(codigo.slice(-2));
    return ultimosDos / 100;
  }

  abstract calcularCosto(codigo: string): number;
  abstract mostrarResumen(): void;
}

class ConsultaGeneral extends Consulta {
  private sintomas: string = "";

  constructor() {
    super(50);
  }

  setSintomas(s: string): void {
    this.sintomas = s;
  }

  calcularCosto(codigo: string): number {
    const descuento = this.calcularDescuento(codigo);
    return this.getPrecioBase() * (1 - descuento);
  }

  mostrarResumen(): void {
    console.log("Tipo: Consulta General");
    console.log("Síntomas:", this.sintomas);
  }
}

class ConsultaEspecialidad extends Consulta {
  private sintomas: string = "";

  constructor() {
    super(90);
  }

  setSintomas(s: string): void {
    this.sintomas = s;
  }

  calcularCosto(codigo: string): number {
    const descuento = this.calcularDescuento(codigo);
    let total = this.getPrecioBase() * (1 - descuento);
    total = total * (1 - 0.03);
    return total;
  }

  mostrarResumen(): void {
    console.log("Tipo: Consulta Especialidad");
    console.log("Síntomas:", this.sintomas);
  }
}

class Paciente {
  private nombre: string;
  private fechaNacimiento: string;
  private edad: number;
  private telefono: string;
  private responsable: string;
  private telefonoResponsable: string;

  constructor(
    nombre: string,
    fechaNacimiento: string,
    edad: number,
    telefono: string,
    responsable: string,
    telefonoResponsable: string
  ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.telefono = telefono;
    this.responsable = responsable;
    this.telefonoResponsable = telefonoResponsable;
  }

  mostrarDatos(): void {
    console.log("Nombre:", this.nombre);
    console.log("Fecha de nacimiento:", this.fechaNacimiento);
    console.log("Edad:", this.edad);
    console.log("Teléfono:", this.telefono);
    console.log("Responsable:", this.responsable);
    console.log("Teléfono responsable:", this.telefonoResponsable);
  }
}

class SistemaClinica {
  mostrarMensajeFinal(): void {
    console.log("Gracias por utilizar el sistema de la clínica");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nombre: ", (nombre: string) => {
  rl.question("Fecha de nacimiento: ", (fecha: string) => {
    rl.question("Edad: ", (edad: string) => {
      rl.question("Teléfono: ", (tel: string) => {
        rl.question("Responsable: ", (resp: string) => {
          rl.question("Teléfono responsable: ", (telResp: string) => {
            rl.question("Código estudiantil: ", (codigo: string) => {
              rl.question("Tipo de consulta (1=General, 2=Especialidad): ", (tipo: string) => {

                const paciente = new Paciente(
                  nombre,
                  fecha,
                  parseInt(edad),
                  tel,
                  resp,
                  telResp
                );

                if (tipo === "1") {
                  const consulta = new ConsultaGeneral();

                  rl.question("Ingrese síntomas: ", (sintomas: string) => {
                    consulta.setSintomas(sintomas);

                    console.log("\n--- RESULTADO ---");
                    paciente.mostrarDatos();
                    consulta.mostrarResumen();
                    console.log("Costo:", consulta.calcularCosto(codigo));

                    new SistemaClinica().mostrarMensajeFinal();
                    rl.close();
                  });

                } else {
                  const consulta = new ConsultaEspecialidad();

                  rl.question("Ingrese síntomas: ", (sintomas: string) => {
                    consulta.setSintomas(sintomas);

                    console.log("\n--- RESULTADO ---");
                    paciente.mostrarDatos();
                    consulta.mostrarResumen();
                    console.log("Costo:", consulta.calcularCosto(codigo));

                    new SistemaClinica().mostrarMensajeFinal();
                    rl.close();
                  });
                }

              });
            });
          });
        });
      });
    });
  });
});
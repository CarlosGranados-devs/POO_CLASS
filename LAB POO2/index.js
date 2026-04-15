"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Consulta {
    constructor(precio) {
        this.precioBase = precio;
    }
    getPrecioBase() {
        return this.precioBase;
    }
    calcularDescuento(codigo) {
        const ultimosDos = parseInt(codigo.slice(-2));
        return ultimosDos / 100;
    }
}
class ConsultaGeneral extends Consulta {
    constructor() {
        super(50);
        this.sintomas = "";
    }
    setSintomas(s) {
        this.sintomas = s;
    }
    calcularCosto(codigo) {
        const descuento = this.calcularDescuento(codigo);
        return this.getPrecioBase() * (1 - descuento);
    }
    mostrarResumen() {
        console.log("Tipo: Consulta General");
        console.log("Síntomas:", this.sintomas);
    }
}
class ConsultaEspecialidad extends Consulta {
    constructor() {
        super(90);
        this.sintomas = "";
    }
    setSintomas(s) {
        this.sintomas = s;
    }
    calcularCosto(codigo) {
        const descuento = this.calcularDescuento(codigo);
        let total = this.getPrecioBase() * (1 - descuento);
        total = total * (1 - 0.03);
        return total;
    }
    mostrarResumen() {
        console.log("Tipo: Consulta Especialidad");
        console.log("Síntomas:", this.sintomas);
    }
}
class Paciente {
    constructor(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.telefono = telefono;
        this.responsable = responsable;
        this.telefonoResponsable = telefonoResponsable;
    }
    mostrarDatos() {
        console.log("Nombre:", this.nombre);
        console.log("Fecha de nacimiento:", this.fechaNacimiento);
        console.log("Edad:", this.edad);
        console.log("Teléfono:", this.telefono);
        console.log("Responsable:", this.responsable);
        console.log("Teléfono responsable:", this.telefonoResponsable);
    }
}
class SistemaClinica {
    mostrarMensajeFinal() {
        console.log("Gracias por utilizar el sistema de la clínica");
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Nombre: ", (nombre) => {
    rl.question("Fecha de nacimiento: ", (fecha) => {
        rl.question("Edad: ", (edad) => {
            rl.question("Teléfono: ", (tel) => {
                rl.question("Responsable: ", (resp) => {
                    rl.question("Teléfono responsable: ", (telResp) => {
                        rl.question("Código estudiantil: ", (codigo) => {
                            rl.question("Tipo de consulta (1=General, 2=Especialidad): ", (tipo) => {
                                const paciente = new Paciente(nombre, fecha, parseInt(edad), tel, resp, telResp);
                                if (tipo === "1") {
                                    const consulta = new ConsultaGeneral();
                                    rl.question("Ingrese síntomas: ", (sintomas) => {
                                        consulta.setSintomas(sintomas);
                                        console.log("\n--- RESULTADO ---");
                                        paciente.mostrarDatos();
                                        consulta.mostrarResumen();
                                        console.log("Costo:", consulta.calcularCosto(codigo));
                                        new SistemaClinica().mostrarMensajeFinal();
                                        rl.close();
                                    });
                                }
                                else {
                                    const consulta = new ConsultaEspecialidad();
                                    rl.question("Ingrese síntomas: ", (sintomas) => {
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

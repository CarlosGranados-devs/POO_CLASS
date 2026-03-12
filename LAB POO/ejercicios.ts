// EJERCICIO 1: Objeto con atributos (privado el último)
class Persona {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    private codIdentificacion: string;

    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const persona1 = new Persona("Juan", "Pérez", "3001234567", "juan@email.com", "1234567890");
console.log(`Nombre: ${persona1.nombre}`);
console.log(`Apellido: ${persona1.apellido}`);
console.log(`Teléfono: ${persona1.telefono}`);
console.log(`Correo: ${persona1.correo}`);

// EJERCICIO 2: Cálculo de precio con descuento
class Producto {
    nombre: string;
    precio: number;
    cantidad: number;
    iva: number = 0.19;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularPrecio(descuento: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuento / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIva = precioConDescuento * this.iva;
        const totalPagar = precioConDescuento + montoIva;

        console.log(`****Cantidad de producto: ${this.cantidad}*****`);
        console.log(`****Precio: $${precioTotal.toFixed(2)}****`);
        console.log(`****Descuento: $${montoDescuento.toFixed(2)}****`);
        console.log(`****Iva: $${montoIva.toFixed(2)}****`);
        console.log(`****Total a pagar: $${totalPagar.toFixed(2)}****`);
    }
}

const producto1 = new Producto("Laptop", 1000, 2);
producto1.calcularPrecio(10);

// EJERCICIO 3: Verificar edad y estado de vida
class EdadPersona {
    fechaNacimiento: Date;

    constructor(fechaNacimiento: Date) {
        this.fechaNacimiento = fechaNacimiento;
    }

    calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    obtenerEstado(): string {
        const edad = this.calcularEdad();
        if (edad >= 0 && edad <= 2) return "Bebé";
        if (edad > 2 && edad <= 10) return "Niño/Niña";
        if (edad > 10 && edad <= 14) return "Pre adolescente";
        if (edad > 14 && edad <= 17) return "Adolescente";
        if (edad >= 18 && edad <= 30) return "Joven";
        if (edad > 30 && edad <= 50) return "Adulto";
        return "Adulto mayor";
    }

    mostrarInfo(): void {
        console.log(`Edad: ${this.calcularEdad()} años`);
        console.log(`Estado: ${this.obtenerEstado()}`);
    }
}

const persona2 = new EdadPersona(new Date(2005, 5, 15));
persona2.mostrarInfo();
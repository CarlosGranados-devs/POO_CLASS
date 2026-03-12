# Code Citations

## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/joser-royectos-javascript/joser-royectos-javascript.github.io/blob/4fcfb2e75727fd0dfb7b6ee086a104b7550ac811/typescriptcopy/build/ejemplo2.js

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


## License: unknown
https://github.com/TodorovManuel/maquin-2024/blob/822f6b0c188b0b2787746a5bc899641a727dd053/main.ts

```
# Ejercicios de POO en TypeScript

Te presento las tres soluciones en TypeScript:

## Ejercicio 1: Objeto con Atributos (codIdentificacion privado)

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\persona.ts
class Persona {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
    private codIdentificacion: string;
    
    constructor(nombre: string, apellido: string, telefono: string, correo: string, codIdentificacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const p = new Persona("Juan", "Pérez", "123456789", "juan@email.com", "987654321");

console.log("Nombre: " + p.nombre);
console.log("Apellido: " + p.apellido);
console.log("Teléfono: " + p.telefono);
console.log("Correo: " + p.correo);
````

---

## Ejercicio 2: Cálculo de Precio con Descuento e IVA

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\producto.ts
class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;
    private readonly IVA: number = 0.19; // 19% IVA
    
    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    public calcularPrecioFinal(descuentoPorcentaje: number): void {
        const precioTotal = this.precio * this.cantidad;
        const montoDescuento = precioTotal * (descuentoPorcentaje / 100);
        const precioConDescuento = precioTotal - montoDescuento;
        const montoIVA = precioConDescuento * this.IVA;
        const totalPagar = precioConDescuento + montoIVA;
        
        console.log("****Cantidad de producto: " + this.cantidad + "*****");
        console.log("****Precio: $" + precioTotal.toFixed(2) + "******");
        console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
        console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
        console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
    }
}

const p = new Producto("Laptop", 1500.00, 2);
p.calcularPrecioFinal(10); // 10% de descuento
````

---

## Ejercicio 3: Verificar Edad y Estado de Persona

````typescript
// filepath: c:\Users\josue\Desktop\POO\LAB POO\edad.ts
class Edad {
    private fechaNacimiento: Date;
    private nombre: string;
    
    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    public calcularEstado(): void {
        const edad = this.calcularEdad();
        const estado = this.determinarEstado(edad);
        
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + edad + " años");
        console.log("Estado: " + estado);
    }
    
    private calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad;
    }
    
    private determinarEstado(edad: number): string {
        if (edad >= 0 && edad <= 2
```


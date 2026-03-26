"use strict";
class Jugador {
    constructor(nickname) {
        this.nickname = nickname;
        this.vida = 100; // vida inicial 100%
    }
    getVida() {
        return this.vida;
    }
    setVida(nuevaVida) {
        if (nuevaVida < 0) {
            this.vida = 0;
        }
        else if (nuevaVida > 100) {
            this.vida = 100;
        }
        else {
            this.vida = nuevaVida;
        }
    }
    mostrarVida(metodo) {
        console.log(`${this.nickname} en ${metodo} tiene ${this.vida.toFixed(2)}% de vida`);
    }
}
class Mundo1 extends Jugador {
    aventura() {
        let vida = this.getVida();
        vida -= vida * 0.30; // -30%
        this.setVida(vida);
        this.mostrarVida("aventura");
    }
    acuatico() {
        let vida = this.getVida();
        vida -= vida * 0.50; // -50%
        vida += vida * 0.10; // +10%
        this.setVida(vida);
        this.mostrarVida("mundo acuático");
    }
    endgame() {
        let vida = this.getVida();
        vida -= vida * 0.50; // -50%
        this.setVida(vida);
        this.mostrarVida("endgame");
    }
}
// 🔥 EJECUCIÓN (esto es lo que te faltaba seguro)
const jugador1 = new Mundo1("Carlos");
console.log("Inicio del juego...\n");
jugador1.aventura();
jugador1.acuatico();
jugador1.endgame();

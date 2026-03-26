abstract class Jugador {
  public nickname: string;
  private vida: number;

  constructor(nickname: string) {
    this.nickname = nickname;
    this.vida = 100; // vida inicial 100%
  }

  public getVida(): number {
    return this.vida;
  }

  protected setVida(nuevaVida: number): void {
    if (nuevaVida < 0) {
      this.vida = 0;
    } else if (nuevaVida > 100) {
      this.vida = 100;
    } else {
      this.vida = nuevaVida;
    }
  }

  protected mostrarVida(metodo: string): void {
    console.log(`${this.nickname} en ${metodo} tiene ${this.vida.toFixed(2)}% de vida`);
  }
}

class Mundo1 extends Jugador {

  aventura(): void {
    let vida = this.getVida();
    vida -= vida * 0.30; // -30%
    this.setVida(vida);
    this.mostrarVida("aventura");
  }

  acuatico(): void {
    let vida = this.getVida();
    vida -= vida * 0.50; // -50%
    vida += vida * 0.10; // +10%
    this.setVida(vida);
    this.mostrarVida("mundo acuático");
  }

  endgame(): void {
    let vida = this.getVida();
    vida -= vida * 0.50; // -50%
    this.setVida(vida);
    this.mostrarVida("endgame");
  }
}

//  EJECUCIÓN
const jugador1 = new Mundo1("Carlos");

console.log("Inicio del juego...\n");

jugador1.aventura();
jugador1.acuatico();
jugador1.endgame();



/////INGE, EL BUS DE LAS 7:20 SALIO A LAS 7:00, LLEGUE TARDE Y POR ESO NO TENGO EL PRIMER EJERCICIO :(((
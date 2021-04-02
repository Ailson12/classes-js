class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }

    acelerar() {
        console.log("Acelerou");
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log("Moto empinou com" + this.rodas + "Rodas");
    }
}

const honda = new Moto(2);
const civic = new Veiculo(4);

console.log(civic);
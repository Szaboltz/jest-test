export default class Calculadora {
    constructor() {}

    public soma(a: number, b: number): number {
        return a + b;
    }

    public subtrair(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number {
        try {
            return a / b;
        } catch (error) {  
            throw new Error;
        }
    }

    public potenciar(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    }

    public radiciar(radicando: number, indice: number): number {
        if (indice === 0) {
            throw new Error("Índice da raiz não pode ser zero");
        }
        if (radicando < 0 && indice % 2 === 0) {
            throw new Error("Raiz par de número negativo não é permitida");
        }
        return Math.pow(radicando, 1 / indice);
    }
}

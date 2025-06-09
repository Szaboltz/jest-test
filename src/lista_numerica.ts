export class ListaNumerica {
  private numeros: number[];

  constructor(numeros: number[]) {
    this.numeros = numeros;
  }

  getNumeros(): number[] {
    return this.numeros;
  }

  getQuantidade(): number {
    return this.numeros.length;
  }

  getSoma(): number {
    return this.numeros.reduce((acc, val) => acc + val, 0);
  }

  estaDentroDoIntervalo(min: number, max: number): boolean {
    if (this.getQuantidade() === 0) return false;

    return this.numeros.every(num => num >= min && num <= max);
  }

  validarIntervalos(qtdMin: number, qtdMax: number, valMin: number, valMax: number): boolean {
    const qtd = this.getQuantidade();
    if (qtd < qtdMin || qtd > qtdMax) {
      return false;
    }

    return this.numeros.every(num => num >= valMin && num <= valMax);
  }
}

import Calculadora from "./calculadora";

describe("Introdução", () => {
  test("Hello world!", () => {
    expect(1).toBe(1);
  });
});

describe("classe Matematica", () => {
  let calc = new Calculadora();

  test("Somar dois números", () => {
    expect(calc.soma(10, 2)).toBe(12);
  });

  test("Subtrair dois números", () => {
    expect(calc.subtrair(10, 2)).toBe(8);
  });

  test("Multiplicar dois números", () => {
    expect(calc.multiplicar(10, 2)).toBe(20);
  });

  test("Dividir dois números", () => {
    expect(calc.dividir(10, 2)).toBe(5);
  });

  test("Potenciar um número", () => {
    expect(calc.potenciar(2, 3)).toBe(8);
  });

  test("Radiciar um número com índice ímpar", () => {
    expect(calc.radiciar(27, 3)).toBeCloseTo(3);
  });

  test("Radiciar um número com índice par", () => {
    expect(calc.radiciar(16, 4)).toBeCloseTo(2);
  });

  test("Erro ao radiciar com índice zero", () => {
    expect(() => calc.radiciar(9, 0)).toThrow("Índice da raiz não pode ser zero");
  });

  test("Erro ao radiciar número negativo com índice par", () => {
    expect(() => calc.radiciar(-16, 2)).toThrow("Raiz par de número negativo não é permitida");
  });
});

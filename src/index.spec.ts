import Calculadora from "./calculadora"

describe("Introdução", () => {
  test("Hello world!", () => {
  expect(1).toBe(1)
  })
})

describe("classe Matematica", () => {
  let calc = new Calculadora();
  test("Somar dois números", () =>{
    expect(calc.soma(10, 2)).toBe(12)
  })
  test("Subtrair dois números", () =>{
    expect(calc.subtrair(10, 2)).toBe(8)
  })
  test("Multiplicar dois números", () =>{
    expect(calc.multiplicar(10, 2)).toBe(20)
  })
  test("Dividir dois números", () =>{
    expect(calc.dividir(10, 2)).toBe(5)
  })
})
 
import { ListaNumerica } from './lista_numerica';

describe('ListaNumerica', () => {
  it('deve retornar a lista de números corretamente', () => {
    const lista = new ListaNumerica([1, 2, 3]);
    expect(lista.getNumeros()).toEqual([1, 2, 3]);
  });

  it('deve retornar a quantidade correta de elementos', () => {
    const lista = new ListaNumerica([1, 2, 3]);
    expect(lista.getQuantidade()).toBe(3);
  });
  it('deve retornar 0 como soma para uma lista vazia', () => {
    const lista = new ListaNumerica([]);
    expect(lista.getSoma()).toBe(0);
  });
  
  it('deve retornar 0 como quantidade para uma lista vazia', () => {
    const lista = new ListaNumerica([]);
    expect(lista.getQuantidade()).toBe(0);
  });
  
  it('deve retornar true se todos os números estiverem dentro do intervalo com um único elemento', () => {
    const lista = new ListaNumerica([5]);
    expect(lista.estaDentroDoIntervalo(5, 5)).toBe(true);
  });

  it('deve retornar a soma correta dos números', () => {
    const lista = new ListaNumerica([1, 2, 3]);
    expect(lista.getSoma()).toBe(6);
  });

  it('deve retornar true se todos os números estiverem dentro do intervalo', () => {
    const lista = new ListaNumerica([5, 6, 7]);
    expect(lista.estaDentroDoIntervalo(5, 10)).toBe(true);
  });

  it('deve retornar false se algum número estiver fora do intervalo', () => {
    const lista = new ListaNumerica([3, 8, 12]);
    expect(lista.estaDentroDoIntervalo(5, 10)).toBe(false);
  });
  it('deve retornar true se todos os números estiverem dentro do intervalo com números iguais', () => {
    const lista = new ListaNumerica([5, 5, 5]);
    expect(lista.estaDentroDoIntervalo(5, 5)).toBe(true);
  });
  
  it('deve retornar false se algum número estiver fora do intervalo com números negativos', () => {
    const lista = new ListaNumerica([-3, 8, 12]);
    expect(lista.estaDentroDoIntervalo(0, 10)).toBe(false);
  });

  it('deve retornar false se a lista estiver vazia', () => {
    const lista = new ListaNumerica([]);
    expect(lista.estaDentroDoIntervalo(1, 10)).toBe(false);
  });
});

describe('ListaNumerica - validação de intervalo', () => {
  it('deve retornar true se quantidade e valores estiverem dentro do intervalo', () => {
    const lista = new ListaNumerica([10, 20, 30]);
    expect(lista.validarIntervalos(2, 5, 0, 50)).toBe(true);
  });

  it('deve retornar false se a quantidade estiver fora do intervalo', () => {
    const lista = new ListaNumerica([10, 20, 30, 40, 50, 60]);
    expect(lista.validarIntervalos(1, 5, 0, 100)).toBe(false);
  });

  it('deve retornar false se um valor estiver fora do intervalo', () => {
    const lista = new ListaNumerica([10, 20, 150]);
    expect(lista.validarIntervalos(1, 5, 0, 100)).toBe(false);
  });
  it('deve retornar true se quantidade e valores estiverem dentro do intervalo com quantidade mínima', () => {
    const lista = new ListaNumerica([10]);
    expect(lista.validarIntervalos(1, 5, 0, 50)).toBe(true);
  });
  
  it('deve retornar false se quantidade e valores estiverem fora do intervalo com quantidade máxima', () => {
    const lista = new ListaNumerica([10, 20, 30, 40, 50, 60]);
    expect(lista.validarIntervalos(1, 5, 100, 200)).toBe(false);
  });
});


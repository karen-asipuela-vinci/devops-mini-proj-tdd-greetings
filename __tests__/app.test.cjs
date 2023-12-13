
const { Main } = require('../src/app.js');

describe('A suite of test for the demo function of theapp class', () => {
    const app = new Main();
  
  it('return Hello, {name}. when given name ', () => {
    const result =app.greet('Jean-Kevin');
    expect(result).toBe('Hello, Jean-Kevin.');
  });

  it('return Hello, my friend when given null ', () => {
    const result =app.greet(null);
    expect(result).toBe('Hello, my friend.');
  });

  it('return Hello, my friend when given undefined ', () => {
    const result =app.greet(undefined);
    expect(result).toBe('Hello, my friend.');
  });

  it('return Hello, my friend when given empty name ', () => {
    const result =app.greet(' ');
    expect(result).toBe('Hello, my friend.');
  });

  it('return HELLO, KENOBI! when given KENOBI ', () => {
    const result =app.greet('KENOBI');
    expect(result).toBe('HELLO, KENOBI!');
  });

  it('return Hello, Kratos and Thanathos. when given Kratos, Thanathos', () => {
    const result =app.greet(['Kratos', 'Thanathos']);
    expect(result).toBe('Hello, Kratos and Thanathos.');
  });

  it('return Hello, Kratos, Thanathos and Hypnos. when given Kratos, Thanathos, Hypnos', () => {
    const result =app.greet(['Kratos', 'Thanathos', 'Hypnos']);
    expect(result).toBe('Hello, Kratos, Thanathos and Hypnos.');
  });

  it('return Hello, Thanathos and Hypnos. AND HELLO KRATOS! when given KRATOS, Thanathos, Hypnos', () => {
    const result =app.greet(['KRATOS', 'Thanathos', 'Hypnos']);
    expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!');
  });

  it('return Hello, Thanathos and Hypnos. AND HELLO KRATOS! when given KRATOS, THOR, Thanathos, Hypnos', () => {
    const result =app.greet(['KRATOS', 'THOR', 'Thanathos', 'Hypnos']);
    expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS AND THOR!');
  });

  it('return Bonjour Kratos et Thanatos. when given Kratos, thanathos, fr', () => {
    const result =app.greet(['kratos', 'Thanathos', 'fr']);
    expect(result).toBe('Bonjour, kratos et Thanathos.');
  });

  it('return Bonjour Kratos. ET BONJOUR THANATHOS! when given Kratos, thanathos, fr', () => {
    const result =app.greet(['Kratos', 'THANATHOS', 'fr']);
    expect(result).toBe('Bonjour, Kratos. ET BONJOUR THANATHOS!');
  });

  it('return Goeiedag, Kratos en Thanatos when given name and language is nl', () => {
    const result = app.greet(['Kratos','Thanatos', 'nl']);
    expect(result).toBe('Goeiedag, Kratos en Thanatos.');
  });
});

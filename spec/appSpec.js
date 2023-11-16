/* eslint-disable no-undef */

import { Main } from '../src/helloWordSpec.js'

 describe('A suite of test for the demo function of the main class', function () {
    let main = new Main()

    it('return Hello, {name}. when given name ', function () {
        const result = main.greet('Jean-Kevin')

        expect(result).toBe('Hello, Jean-Kevin.')
    })

    it('return Hello, my friend when given null ', function () {
        const result = main.greet(null)

          expect(result).toBe('Hello, my friend.')
    })

    it('return Hello, my friend when given undefined ', function () {
        const result = main.greet(undefined)

        expect(result).toBe('Hello, my friend.')
    })

    it('return Hello, my friend when given empty name ', function () {
        const result = main.greet(' ')

        expect(result).toBe('Hello, my friend.')
    })

    it('return HELLO, KENOBI! when given KENOBI ', function () {
        const result = main.greet('KENOBI')

        expect(result).toBe('HELLO, KENOBI!')
    })

    it('return Hello, Kratos and Thanathos. when given Kratos, Thanathos', function () {
        const result = main.greet(['Kratos', 'Thanathos'])

        expect(result).toBe('Hello, Kratos and Thanathos.')
    })

    it('return Hello, Kratos, Thanathos and Hypnos. when given Kratos, Thanathos, Hypnos', function () {
        const result = main.greet(['Kratos', 'Thanathos', 'Hypnos'])

        expect(result).toBe('Hello, Kratos, Thanathos and Hypnos.')
    })

    it('return Hello, Thanathos and Hypnos. AND HELLO KRATOS! when given KRATOS, Thanathos, Hypnos', function () {
        const result = main.greet(['KRATOS', 'Thanathos', 'Hypnos'])

        expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!')
    })

    it('return Hello, Thanathos and Hypnos. AND HELLO KRATOS! when given KRATOS, THOR, Thanathos, Hypnos', function () {
        const result = main.greet(['KRATOS','THOR', 'Thanathos', 'Hypnos'])

        expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS AND THOR!')
    })

    it('return Bonjour Kratos et Thanatos. when given Kratos, thanathos, fr', function () {
        const result = main.greet(['kratos', 'Thanathos', 'fr'])

        expect(result).toBe('Bonjour, kratos et Thanathos.')
    })

    it('return Bonjour Kratos. ET BONJOUR THANATHOS! when given Kratos, thanathos, fr', function () {
        const result = main.greet(['Kratos', 'THANATHOS', 'fr'])

        expect(result).toBe('Bonjour, Kratos. ET BONJOUR THANATHOS!')
    })
})

import { Main } from '../src/helloWordSpec.js';

describe("A suite of test for the demo function of the main class", function() {
    let main = new Main();

    it("return Hello, {name}. when given name ", function() {
        const result = main.greet("Jean-Kevin");
        expect(result).toBe("Hello, Jean-Kevin.");

    });

    it("return Hello, my friend when given null ", function() {
        const result = main.greet(null);
        expect(result).toBe("Hello, my friend.");

    });

    it("return Hello, my friend when given undefined ", function() {
        const result = main.greet(undefined);
        expect(result).toBe("Hello, my friend.");

    });

    it("return Hello, my friend when given empty name ", function() {
        const result = main.greet(" ");
        expect(result).toBe("Hello, my friend.");

    });

    it("return HELLO, KENOBI! when given KENOBI ", function() {
        const result = main.greet("KENOBI");
        expect(result).toBe("HELLO, KENOBI!");

    });

    it("return Hello, Kratos and Thanathos. when given Kratos, Thanathos", function(){
        const result = main.greet(["Kratos", "Thanathos"]);
        expect(result).toBe("Hello, Kratos and Thanathos.");
    });

});
import { Main } from '../src/helloWordSpec.js';

describe("A suite of test for the demo function of the main class", function() {
    let main = new Main();

    it("return Hello, {name} when given name ", function() {
        const result = main.greet("Jean-Kevin");
        expect(result).toBe("Hello, Jean-Kevin.");

    });

});
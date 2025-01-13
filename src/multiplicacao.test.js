const soma = require('./multiplicacao');

test("add 2 * 2 to be equal 4", ()=> {
    expect(soma(2,2)).toBe(4);
});


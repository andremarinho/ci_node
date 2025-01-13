const soma = require('./soma');

test("add 1 + 2 to be equal 3", ()=> {
    expect(soma(1,2)).toBe(4);
});

test("add 2 + 2 to be equal 4", ()=> {
    expect(soma(2,2)).toBe(4);
});

test("add 2 + 3 to be equal 5", ()=> {
    expect(soma(2,3)).toBe(5);
});
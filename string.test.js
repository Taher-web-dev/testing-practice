const {stringLength,reverseString,Calculator,capitalize} = require('./fcts');
// unit test for stringLength function.
test('Raise error', () => {
  expect(() => stringLength('bigwords is very common used')).toThrow('The length of the introduced string is not in the expected range.');
});
test('Expected length of bigwords is 8',() => {
  expect(stringLength('bigwords')).toBe(8);
});
// unit test for reverse string function.
test('Reverse of Hello to be olleH', () => {
  expect(reverseString('Hello')).toMatch('olleH');
})
//unit test for calculator class methods.
describe('calculator', () => {
  describe('add',() => {
    test('adds 1 + 2 to equal 3', () => {
      expect(new Calculator(1,2).add()).toBe(3);
    });
    test(' adds -1 + 1 to equal 0', () => {
      expect(new Calculator(-1,1).add()).toBe(0);
    });
    test('adds -5 + -5 to be equal -10',() => {
      expect(new Calculator(-5,-5).add()).toBe(-10);
    });
  });
  describe('substract',() => {
    test('5 substract 2 to be equal 3',() => {
      expect(new Calculator(5,2).substract()).toBe(3);
    });
    test('5 substract 5 to be equal 0',() => {
      expect(new Calculator(5,5).substract()).toBe(0);
    });
    test('5 substract 9 to be equal -4',() => {
      expect(new Calculator(5,9).substract()).toBe(-4);
    });
  });
  describe('multiply', () => {
    test('5 multiply 5 to be 25',()=> {
      expect(new Calculator(5,5).multiply()).toBe(25);
    });
    test('5 multiply 0 to be 0', () => {
      expect(new Calculator(5, 0).multiply()).toBe(0);
    });
    test('-5 multiply -5 to be 25', () => {
      expect(new Calculator(-5,-5).multiply()).toBe(25);
    });
  });
  describe('divide', () => {
    test('raise error',() => {
      expect(() => new Calculator(5,0).divide()).toThrow();
    });
    test('6  divide 4 to be 1.5', () => {
      expect(new Calculator(6,4).divide()).toBeCloseTo(1.5);
    });
    test('-15 divide 3 to be -5', () => {
      expect(new Calculator(-15,3).divide()).toBe(-5);
    });
  });
});
// unit test for capitalize function 
test('capatilize first character of taher return Taher', () => {
  expect(capitalize('taher')).toMatch('Taher');
});
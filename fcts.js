// create function which can return string length
const stringLength = str => {
  const l = str.length;
  if( l < 1 || l > 10) {
    throw new Error('The length of the introduced string is not in the expected range.');
  }
  return l;
}
// create function which can return reversed string.
const reverseString = str => str.split('').reverse().join('');
// create calculator class 
class Calculator{
  constructor(value1,value2){
    this.val_1 = value1;
    this.val_2 = value2;
  }
  add(){
    return this.val_1 + this.val_2;
  }
  substract(){
    return this.val_1 - this.val_2;
  }
  multiply() {
    return this.val_1 * this.val_2;
  }
  divide() {
    if(this.val_2 === 0) throw new Error('Can not divide by zero');
    return this.val_1 / this.val_2;
  }
}
// create capitalize function 
const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);
module.exports = {stringLength,reverseString,Calculator,capitalize};

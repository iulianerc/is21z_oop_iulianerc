class Computer {
  
  eval(expression) {
    return eval(expression)
  }
  
  sin(number) {
      return Math.sin(number);
  }
  
  cos(number) {
    return Math.cos(number);
  }
  
  tan(number) {
    return Math.tan(number);
  }
  
  cotan(number) {
    return 1/Math.tan(number);
  }
  
  sqrt(number) {
    return Math.sqrt(number);
  }
  
  pow(base, pow) {
    return Math.pow(base, pow);
  }
  
  exp(number) {
    return Math.exp(number);
  }
  
  abs(number) {
    return Math.abs(number);
  }
  
  fact(number) {
    if (number === 1) {
      return 1;
    }
    
    return this.fact(number - 1) * number;
  }
  
  ln(number) {
    return Math.log(number);
  }
}
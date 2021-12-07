class ComputerHandler {
  expression = '';
  
  setExpression (expression) {
    this.expression = expression;
  }
  
  eval () {
    return eval(this.expression);
  }
  
}
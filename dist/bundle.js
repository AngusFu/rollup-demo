'use strict';

function add(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
};

function square(x) {
  return x * x;
};

function compose(...args) {
  const funcs = args;
  return function ( ...args ) {
    funcs.forEach(( func ) => {
      args = [func.apply( this, args )]; 
    });
    return args[0];
  };
}

const x = 9;
const y = 5;

var addThenSquare = compose(add, square);
console.log(addThenSquare(x, y) === (x + y) * (x + y));
export function compose(...args) {
  const funcs = args;
  return function ( ...args ) {
    funcs.forEach(( func ) => {
      args = [func.apply( this, args )]; 
    });
    return args[0];
  };
}

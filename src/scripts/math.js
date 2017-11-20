export function add(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
};

export function square(x) {
  return x * x;
};

export function cube(x) {
  return Math.pow(x, 3);
}



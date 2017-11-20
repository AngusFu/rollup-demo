import '../styles/index.css'

import { add, square } from './math';
import { compose } from './compose';

const x = 9;
const y = 5;

var addThenSquare = compose(add, square);
console.log(addThenSquare(x, y) === (x + y) * (x + y));

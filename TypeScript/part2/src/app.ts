// import { hi } from './hello/hello';
let a: string = 'b';
let obj = {
  a: 1,
  b: 2
};

let c: unknown = obj?.a;
console.log(c);
// console.log(hi);

function fn2(this: Window) {
  console.log(this);
}

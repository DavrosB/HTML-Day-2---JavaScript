// USE STRICT and CONSOLE

// use strict
// * forces you to write `secure` JavaScript
// * if you don't use it code with `bad syntax` will
//   not produce errors
// * stops you from accidently producing a global variable
// * stops you assigning values to non-writable properties
// * stops you from using protected words

`use strict`

// protected word example
//let let = 2;

// output to console
console.log();

// different console outputs

let text = `this is a message`;

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

// you can style the console

console.log(`%c` + text, `color:black; background-color: white; font-size: 20px; padding:5px;`)
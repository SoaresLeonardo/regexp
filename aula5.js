const { alfabeto } = require("./base");

// [abc] -> Conjunto [^] -> Negação
// [0-9]

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]/g));
console.log(alfabeto.match(/[a-k]/g));
console.log(alfabeto.match(/[A-Z]/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D/g));
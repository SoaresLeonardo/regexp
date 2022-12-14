const { html2 } = require("./base");

// $1 $2 $3 <- Retrovisores \1

// p
// <p>Olá mundo </p>

console.log(html2);
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
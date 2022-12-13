const { texto, arquivos } = require("./base");

// * (opcionais) 0 ou n {0, 1}
// + (obrigatorio) 1 ou n
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m}

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

//   if (!valido) continue;

  console.log(arquivo, valido);
}

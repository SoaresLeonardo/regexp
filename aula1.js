// g - global (encontra todas as ocorrĂȘncias)
// i - insensitive
// ()
// | ou
const {texto} =  require('./base');


const regExp1 = /(maria)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

console.log(found[0]);
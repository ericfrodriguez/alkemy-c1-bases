
const suma = function (a, b) { return a + b; }
const resultadoSuma = suma(5, 10);
console.log('[function]', resultadoSuma);


const resta = (a, b) => a - b;
const resultadoResta = resta(50, 10);
console.log(resultadoResta);


const saludar = nombre => console.log(`Hola ${nombre}`);
saludar('Eric');
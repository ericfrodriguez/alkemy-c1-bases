
const saludar = () => console.trace('Bienvenidx!');


function miFuncion(callback) {

    const edad = 20;

    if(edad >= 18) {
        callback();
    }
}

miFuncion(saludar);

let variable;

console.log(variable);
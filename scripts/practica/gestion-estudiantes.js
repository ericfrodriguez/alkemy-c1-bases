const estudiante1 = {
    nombre: 'Eric',
    edad: 24,
    curso: 'C1 JS',
    calificaciones: [8, 9, 5],
}

const estudiante2 = {
    nombre: 'Lucia',
    edad: 20,
    curso: 'C1 JS',
    calificaciones: [7, 10, 8],
}

const estudiante3 = {
    nombre: 'Jere',
    edad: 35,
    curso: 'C1 JS',
    calificaciones: [2, 6, 10],
}

const listaEstudiantes = [estudiante1, estudiante2, estudiante3];
// console.table(listaEstudiantes);

// La suma consecutiva de los valores, divido la cantidad de valores.
// Ej. Jere: (2 + 6 + 10) / 3

// 1. Recorrer array de calificaciones para hacer la suma
// 2. Realizar la division entre la suma y la cantidad de notas

function calcularPromedio(calificaciones) {

    let suma = 0;
    
    // Investigar metodo de arrays .reduce()
    for(let indice = 0; indice < calificaciones.length; indice++) {
        suma = suma + calificaciones[indice];
    }

    const promedio = suma / calificaciones.length;

    return promedio
}

listaEstudiantes.forEach((estudiante) => {

    let {calificaciones, nombre, edad, curso, promedio} = estudiante;

    promedio = calcularPromedio(calificaciones);

    const reporte = `
    Nombre: ${nombre}
    Edad: ${edad}
    Curso: ${curso}
    Promedio: ${promedio}
    `;

    console.log(reporte);
});




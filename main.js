const { crearTabla } = require('./helpers/multiplicar');

console.clear();

const base = 3;

crearTabla(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
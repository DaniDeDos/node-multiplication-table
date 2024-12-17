const argv = require("./config/yargs")
const { crearTabla } = require('./helpers/multiplicar');

console.clear();

crearTabla(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

    
const fs = require('fs')
const colors = require('colors')

const crearTabla = async (base = 5, listar = false) => {
    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`
        }

        if (listar) {
            console.log('========================');
            console.log('  Tabla del: ', colors.blue(base))
            console.log('========================');

            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return (`tabla-${base}.txt`)
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearTabla
}
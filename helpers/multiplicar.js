const fs = require('fs')
const colors = require('colors')

const crearTabla = async (base = 5, hasta = 10, listar = false) => {
    try {
        let salida = '';
        let consola = '';


        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`
        }

        if (listar) {
            console.log('========================');
            console.log('     Tabla del: ', colors.blue(base))
            console.log('========================');

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return (`tabla-${base}.txt`)
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearTabla
}
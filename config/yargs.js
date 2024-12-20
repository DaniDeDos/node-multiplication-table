import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const yargs = _yargs(hideBin(process.argv));

const argv = yargs
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "limite hasta donde se va a generar la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "muestra la tabla en persona",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  }).argv;

export default argv ;

import argv from "./config/yargs.js";
import { crearTabla } from "./helpers/multiplicar.js";

console.clear();

crearTabla(argv.b, argv.h, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

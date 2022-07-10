const { crearArchivo } = require("./helpers/multiplicar");
const argv  = require('./config/yargs');

console.clear();


const [, , arg3 = "base4"] = process.argv;
const [, base = 4] = arg3.split("=");



console.log("base: yargs", argv.base);

/* const base = 4; */

 crearArchivo(argv.base, argv.l, argv.h)
  .then((nombreArchivo) => {
    console.log("archivo", nombreArchivo);
  })
  .catch((error) => {
    console.log(error);
  });
 
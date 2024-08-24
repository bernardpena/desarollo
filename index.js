//console.log("Hola");

const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  registrar(nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad);
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operación no válida. Usar 'registrar' o 'leer'.");
}

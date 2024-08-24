const fs = require("fs");

const registrar = (nombre, edad, tipoDeAnimal, colorDelAnimal, enfermedad) => {
  const datosAnimal = {
    nombre: nombre,
    edad: edad,
    Animal: tipoDeAnimal,
    color: colorDelAnimal,
    enfermedad: enfermedad,
  };

  const datos = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  datos.push(datosAnimal);
  fs.writeFileSync("citas.json", JSON.stringify(datos));
};

const leer = () => {
  const datos = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(datos);
};

module.exports = { registrar, leer };

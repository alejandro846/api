const convertir = require("./libraryCurrency.js");
let conversion = function (mon) {
    console.log("La conversion es de "+mon.conversion_rates.ARS);
}
var mon = "dolar";
convertir(mon)
  .then((m) => {
    conversion(m);
  }).catch((err) => {
    console.log("Error");
  });
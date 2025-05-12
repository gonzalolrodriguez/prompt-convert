let eleccionUsuario;
let valorARS;
let precioDolar = 1300;
let history = [];
function convertCurrency(valorARS) {
    return valorARS / precioDolar;
}
do {
    eleccionUsuario = parseInt(
        prompt("Bienvenido. \n 1) Cambiar ARS a USD. \n 2) Salir.")
    );
    switch (eleccionUsuario) {
        case 1:
            valorARS = parseFloat(prompt("¿Cuantos pesos desea cambiar?"));
            convertCurrency(valorARS);
            alert("Valor: " + convertCurrency(valorARS).toFixed(2));
            historial.push({
                tipo: "divisa",
                entrada: valorARS + "ARS",
                salida: convertCurrency(valorARS) + "USD",
                fecha: new Date().toLocaleString(2),
            });
    }
} while (eleccionUsuario != 2);
{
    console.log(history);
}

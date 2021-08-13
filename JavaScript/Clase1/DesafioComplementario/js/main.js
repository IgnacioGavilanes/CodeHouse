//Se le pide al usuario un número
let inp1 = prompt("Inserte un número:");

//Se le pide al usuario otro número
let inp2 = prompt("Inserte otro número:");

//Se calcula el promedio entre los dos números proporcionados
let avg = (parseFloat(inp1)+parseFloat(inp2))/2;

//Se muestra el resultado de la operación avg en la consola
console.log(`el promedio de ${inp1} y ${inp2} es ${avg}`);
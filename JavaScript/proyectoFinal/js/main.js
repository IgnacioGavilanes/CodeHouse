/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE LOGIC FOR THE FLOW OF OUR WEB APP.
it consumes variables.js, data.js and functions.js.
----------------------------------------------------------------------------------------------------------*/

do {
    itemId = mainMenu()
    if (itemId === (storeItems.length + 1)) break;

    quantity = parseInt(prompt(askQuantity));

    addToBag(quantity, itemId)

    answer = prompt("Desea agregar mas productos? S/N")
}

while (answer == "S")

if (bag > 0) {
    alert(`El total de su compra es de ${bag}`)
}


else {
    alert("Gracias por su visita")
}
/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE GLOBAL VARIABLES.
----------------------------------------------------------------------------------------------------------*/

//Created as default for the quantity of a specific item the customer is going to purchase
let quantity = 0;

//Equivalent of Price * Quantity
let preTaxTotal = 0;

//Tax (21% of Price * Quantity). let total = bag * taxValue * quantity (if quantity != 0)
const taxValue = 0.021;

//Total after tax
let bag = 0;

let bagArray = [];
// storeItems[itemId - 1].stock -= quantity;


//URL to json file containing all products
const JSONurl = "./js/data.json"

//jQuery selector for all the add to bag buttons on our products' cards

let shipping = 20.00;

//Product card






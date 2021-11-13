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

//Array for products in bag
let bagArray = [];



//URL to json file containing all products
const JSONurl = "./js/data.json"

//Standard Shipping
let shipping = 20.00;







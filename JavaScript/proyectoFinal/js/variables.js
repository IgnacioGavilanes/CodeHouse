/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE GLOBAL VARIABLES.
----------------------------------------------------------------------------------------------------------*/

//Created as default value for mainMenu
let itemId = 0;

//String displayed in prompt before indicating quantity value
const askQuantity = 'Indica la cantidad que deseas'
//Created as default for the quantity of a specific item the customer is going to purchase
let quantity = 0;

//Equivalent of Price * Quantity
let preTaxTotal = 0;
//Tax (21% of Price * Quantity)
const taxValue = 0.21;
//Total after tax
let bag = 0;

//Used as default for menu in main.js
let answer = "S"
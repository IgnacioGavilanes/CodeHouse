/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE FUNCTIONS AND SERVES THE PURPOSE OF LINKING USER INPUTS/ACTIONS WITH 
THE WEB APP LOGIC.
it consumes variables.js and data.js.
----------------------------------------------------------------------------------------------------------*/




/*----------------------------------------------------------------------------------------------------------
This function is used in order to display the main menu. It uses forEach to iterate over the array of products
and creates a list of them for the user to select one. Also contains an exit option (used to break the loop in main.js).
Returns
- variable menu with all products in array ordered by id. 
----------------------------------------------------------------------------------------------------------*/
const mainMenu =() => {
    let menu = "Seleccione el producto que desee comprar: \n";
    storeItems.forEach((item, i) => menu += i+1 + ".- " + item.title + "\n");
    menu += (storeItems.length + 1) + ".- Salir"
    return parseInt(prompt(menu));
}

/*----------------------------------------------------------------------------------------------------------
This function compares the amount of stock the user wants to purchase agains the amount of stock available 
in storeItems (array of all products available).
Returns
- false if the amount the user wants to buy exceeds product stock
- true if the amount of items selected by the user are available for purchase
----------------------------------------------------------------------------------------------------------*/
function checkStock (quantity, stock) {
    if (quantity > stock) {
        alert(`Stock insuficiente. El stock disponible de ${addToBag(found.title)} es de ${addToBag(found.stock)}`);
        return false
    }
    else {
        return true
    }
}

/*----------------------------------------------------------------------------------------------------------
This function handles adding products to shopping bag. It also utilizes checkStock to see if there is enough
stock to proceed with the purchase. If there is enough stock it adds the item/s to the bag, otherwise the 
checkStock function uses alert to display a message informing the user the stock available. 
Returns
- does not return anything
----------------------------------------------------------------------------------------------------------*/
function addToBag (quantity, itemId) {
    let found = storeItems.find(item => item.id === itemId);

    if (checkStock(quantity, found.stock)) {
        preTaxTotal += (quantity * found.price);
        storeItems[itemId - 1].stock -= quantity;
        bag = preTaxTotal + tax(preTaxTotal);

        alert(`Su total es de ${bag} incluyendo impuestos`)
    }
}


function tax (preTaxTotal){
    let taxAmount = preTaxTotal * taxValue;
    return taxAmount;
}


/*----------------------------------------------------------------------------------------------------------
FILTERS
----------------------------------------------------------------------------------------------------------*/






/*----------------------------------------------------------------------------------------------------------
This function takes the index of the shoe title, the index of the primary color and the index of the secondary 
color and checks if there is a combination of colors and shoe title. Primary and secondary colors may be introduced
interchangebly.
Returns
- true if a combination of the introduced parameters exists
- false if it does not
----------------------------------------------------------------------------------------------------------*/
// function colorFiltered (titleIndex, primaryIndex, secondaryIndex) {
//     let colorPrimarySelected = storeItems[titleIndex].colorPrimary
//     let colorSecondarySelected = storeItems[titleIndex].colorSecondary
//     if ( 
//         (primaryIndex == colors.indexOf(colorPrimarySelected) && secondaryIndex == colors.indexOf(colorSecondarySelected)) 
//         || 
//         (primaryIndex == colors.indexOf(colorSecondarySelected) && secondaryIndex == colors.indexOf(colorPrimarySelected)) 
//        ) {
//         return true
//     }
//     else {
//     return false
//     }
// }



// /*----------------------------------------------------------------------------------------------------------
// This function takes the index of the shoe title and the index of the shoe brand. It then filters through the 
// array and checks whether there is a match between the title of the shoe and the brand OR the collab.
// Returns
// - true if a combinantion of the introduced parameters exists 
// - false if it does not
// ----------------------------------------------------------------------------------------------------------*/
// function brandFiltered (titleIndex, brandName) {
//     let brandSelected = storeItems[titleIndex].brand
//     let collabSelected = storeItems[titleIndex].collab
//     if ((brandName == brandSelected) || (brandName == collabSelected)) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// function pricez (min, max) {
//         //the problem is that I need to find a way to use the array storeItems inside my function. For some reason the function is not recognizing it
//         let result = []

//         for (let i = 0; (min <= storeItems[i].price) && (storeItems[i].price <= max); i++) {
            
//             result.push(i);
//         }
//     return result
// }
// //This works but still need to find a better way to do it. Need to be able to easily set min and max parameters
// let min = 3
// let max = 5
//     const priceFilteredArray = storeItems.filter
// (
//     (item) => { return ((min <= item.price)&&(item.price <= max))}
// )





// //Once all filters are applied, we need to know which results we are going to be shown
// function showResults () {    
// }



// //Resets all filters
// function resetFilters () {}


// //calculates tax from total cart value
// function tax (){
//     let taxTotal = preTaxTotal * taxvalue;
//     return taxTotal;
// }

// function removeFromBag(){
// }

// function updateCart(){
// }

// function changeQuantity(){
//}
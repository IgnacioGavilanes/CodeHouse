//Necessary variables
let preTaxTotal = 0;
let total = 0;
let quantity = 0;

const colors = 
['green', 'black', 'white', 'yellow', 'pink', 'purple', 'blue', 'red', 'orange', 'burgundy', 'grey', 'beige'];
// INDEXES
// 0 - green
// 1 - black
// 2 - white
// 3 - yellow
// 4 - pink
// 5 - purple
// 6 - blue
// 7 - red
// 8 - orange
// 9 - burgundy
// 10 - grey
// 11 - beige

//STILL NEED TO UPDATE SHOE PRICES AND FIND A SOLUTION FOR ONLY 1 COLOR SHOES.
//NEED TO FIX EMPTY STRINGS FOR SHOES WITH NO COLLAB VALUE
const storeItems = [
    //only 1 color
    {title: '327casablanca', brand: 'newbalance', collab: 'casablanca', type: 'low', colorPrimary: colors[2], colorSecondary: colors[0], price: 1},
    {title: 'adidasraf', brand: 'adidas', collab: 'rafsimons', type: 'low', colorPrimary: colors[3], colorSecondary: colors[1], price: 2},
    {title: 'balenciagasss', brand: 'balenciaga', collab: '', type: 'low', colorPrimary: colors[1], colorSecondary: colors[7], price: 3},
    {title: 'balenciagatrack', brand: 'balenciaga', collab: '', type: 'low', colorPrimary: colors[8], colorSecondary: colors[6], price: 4},
    {title: 'blazersacai', brand: 'nike', collab: 'sacai', type: 'high', colorPrimary: colors[3], colorSecondary: colors[6], price: 5},
    {title: 'diorb23', brand: 'dior', collab: '', type: 'high', colorPrimary: colors[2], colorSecondary: colors[1], price: 6},
    {title: 'nb990', brand: 'newbalance', collab: '', type: 'low', colorPrimary: colors[0], colorSecondary: colors[5], price: 7},
    {title: 'nb2002', brand: 'newbalance', collab: '', type: 'low', colorPrimary: colors[8], colorSecondary: colors[1], price: 8},
    {title: 'nikealphafly', brand: 'nike', collab: '', type: 'low', colorPrimary: colors[1], colorSecondary: colors[0], price: 9},
    //only 1 color
    {title: 'nikebb', brand: 'nike', collab: '', type: 'low', colorPrimary: colors[10], colorSecondary: colors[6], price: 1},
    {title: 'offjordan1', brand: 'nike', collab: 'offwhite', type: 'high', colorPrimary: colors[2], colorSecondary: colors[7], price: 2},
    {title: 'offlowdunk', brand: 'nike', collab: 'offwhite', type: 'low', colorPrimary: colors[0], colorSecondary: colors[8], price: 3},
    {title: 'offnikezoom', brand: 'nike', collab: 'offwhite', type: 'low', colorPrimary: colors[4], colorSecondary: colors[5], price: 4},
    //only 1 color
    {title: 'offodsy2000', brand: 'offwhite', collab: '', type: 'low', colorPrimary: colors[6], colorSecondary: colors[2], price: 5},
    {title: 'wafflesacai', brand: 'nike', collab: 'sacai', type: 'low', colorPrimary: colors[9], colorSecondary: colors[0], price: 6},
    //only 1 color
    {title: 'yeezy500', brand: 'adidas', collab: 'yeezy', type: 'low', colorPrimary: colors[11], colorSecondary: colors[0], price: 7},
    
    {title: 'yeezy350', brand: 'adidas', collab: 'yeezy', type: 'low', colorPrimary: colors[1], colorSecondary: colors[2], price: 8},
    {title: 'yeezy700', brand: 'adidas', collab: 'yeezy', type: 'low', colorPrimary: colors[6], colorSecondary: colors[2], price: 9},
];


//This function takes the index of the shoe title, the index of the primary color and the index of the secondary color and checks if there is a combination
//of colors and shoe title. primary and secondary colors may be introduced interchangebly.
function colorFiltered (titleIndex, primaryIndex, secondaryIndex) {

    let colorPrimarySelected = storeItems[titleIndex].colorPrimary
    let colorSecondarySelected = storeItems[titleIndex].colorSecondary

    if ( 
        (primaryIndex == colors.indexOf(colorPrimarySelected) && secondaryIndex == colors.indexOf(colorSecondarySelected)) 
        || 
        (primaryIndex == colors.indexOf(colorSecondarySelected) && secondaryIndex == colors.indexOf(colorPrimarySelected)) 
       ) {
        return true
    }

    else {
    return false
    }
}

//filter by brand/collab
function brandFiltered (titleIndex, brandName) {

    let brandSelected = storeItems[titleIndex].brand
    let collabSelected = storeItems[titleIndex].collab

    if ((brandName == brandSelected) || (brandName == collabSelected)) {
        return true

    }
    else {
        return false
    }
}


function pricez (min, max) {
        //the problem is that I need to find a way to use the array storeItems inside my function. For some reason the function is not recognizing it
        let result = []

        for (let i = 0; (min <= storeItems[i].price) && (storeItems[i].price <= max); i++) {
            
            result.push(i);
        }
    return result
}
//This works but still need to find a better way to do it. Need to be able to easily set min and max parameters
let min = 3
let max = 5
    const priceFilteredArray = storeItems.filter
(
    (item) => { return ((min <= item.price)&&(item.price <= max))}
)




//infinite stock, but it would be a good idea to save size preference and show in cart. 
//Also, if I end up adding a separate page with a shoe close up, it would be nice if I 
//show the filtered/saved preference after clicking on the shoe.
function sizeFiltered () {}

//Once all filters are applied, we need to know which results we are going to be shown
function showResults () {    
}

//Resets all filters
function resetFilters () {}


//calculates tax from total cart value
function tax (){
    const taxvalue = 0.22
    let taxTotal = preTaxTotal * taxvalue;
    return taxTotal;
}


//cartItems Array
let cartItems = []



function addToCart(){
}

function removeFromCart(){
}

function updateCart(){
}


function changeQuantity(){
}
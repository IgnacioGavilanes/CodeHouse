/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE INFORMATION REGARDING THE PRODUCTS ON THE PROJECT. WILL MOVE TO JSON FILE EVENTUALLY 
----------------------------------------------------------------------------------------------------------*/



const colors = 
['green', 'black', 'white', 'yellow', 'pink', 'purple', 'blue', 'red', 'orange', 'burgundy', 'grey', 'beige']; 
//INDEXES: 0 - green, 1 - black, 2 - white, 3 - yellow, 4 - pink, 5 - purple, 6 - blue, 7 - red, 8 - orange, 9 - burgundy, 10 - grey, 11 - beige

//STILL NEED TO UPDATE SHOE PRICES AND FIND A SOLUTION FOR ONLY 1 COLOR SHOES. NEED TO FIX EMPTY STRINGS FOR SHOES WITH NO COLLAB VALUE
const storeItems = [
    //only 1 color
    {id: 1, title: '327casablanca', brand: 'newbalance', collab: 'casablanca', type: 'low', colorPrimary: colors[2], colorSecondary: colors[0], stock: 3, price: 120},
    {id: 2, title: 'adidasraf', brand: 'adidas', collab: 'rafsimons', type: 'low', colorPrimary: colors[3], colorSecondary: colors[1], stock: 2, price: 170},
    {id: 3, title: 'balenciagasss', brand: 'balenciaga', collab: '', type: 'low', colorPrimary: colors[1], colorSecondary: colors[7], stock: 1,  price: 300},
    {id: 4, title: 'balenciagatrack', brand: 'balenciaga', collab: '', type: 'low', colorPrimary: colors[8], colorSecondary: colors[6], stock: 2,  price: 375},
    {id: 5, title: 'blazersacai', brand: 'nike', collab: 'sacai', type: 'high', colorPrimary: colors[3], colorSecondary: colors[6], stock: 2,  price: 140},
    {id: 6, title: 'diorb23', brand: 'dior', collab: '', type: 'high', colorPrimary: colors[2], colorSecondary: colors[1], stock: 4,  price: 350},
    {id: 7, title: 'nb990', brand: 'newbalance', collab: '', type: 'low', colorPrimary: colors[0], colorSecondary: colors[5], stock: 2,  price: 160},
    {id: 8, title: 'nb2002', brand: 'newbalance', collab: '', type: 'low', colorPrimary: colors[8], colorSecondary: colors[1], stock: 3,  price: 125},
    {id: 9, title: 'nikealphafly', brand: 'nike', collab: '', type: 'low', colorPrimary: colors[1], colorSecondary: colors[0], stock: 1,  price: 220},
    //only 1 color
    {id: 10, title: 'nikebb', brand: 'nike', collab: '', type: 'low', colorPrimary: colors[10], colorSecondary: colors[6], stock: 4,  price: 300},
    {id: 11, title: 'offjordan1', brand: 'nike', collab: 'offwhite', type: 'high', colorPrimary: colors[2], colorSecondary: colors[7], stock: 3,  price: 190},
    {id: 12, title: 'offlowdunk', brand: 'nike', collab: 'offwhite', type: 'low', colorPrimary: colors[0], colorSecondary: colors[8], stock: 3,  price: 180},
    {id: 13, title: 'offnikezoom', brand: 'nike', collab: 'offwhite', type: 'low', colorPrimary: colors[4], colorSecondary: colors[5], stock: 1,  price: 260},
    //only 1 color
    {id: 14, title: 'offodsy2000', brand: 'offwhite', collab: '', type: 'low', colorPrimary: colors[6], colorSecondary: colors[2], stock: 2,  price: 275},
    {id: 15, title: 'wafflesacai', brand: 'nike', collab: 'sacai', type: 'low', colorPrimary: colors[9], colorSecondary: colors[0], stock: 5,  price: 180},
    //only 1 color
    {id: 16, title: 'yeezy500', brand: 'adidas', collab: 'yeezy', type: 'low', colorPrimary: colors[11], colorSecondary: colors[0], stock: 4,  price: 200},
    {id: 17, title: 'yeezy350', brand: 'adidas', collab: 'yeezy', type: 'low', colorPrimary: colors[1], colorSecondary: colors[2], stock: 2,  price: 220},
    {id: 18, title: 'yeezy700', brand: 'adidas', collab: 'yeezy', type: 'low', colorPrimary: colors[6], colorSecondary: colors[2], stock: 3,  price: 250},
];
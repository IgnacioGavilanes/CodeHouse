/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE INFORMATION REGARDING THE PRODUCTS ON THE PROJECT. WILL MOVE TO JSON FILE EVENTUALLY 
----------------------------------------------------------------------------------------------------------*/

const storeItems = [
    {id: 1, title: "New Balance 327 x Casablanca", colorway: "Green Logo Colorway", brand: "newbalance", collab: "casablanca", 
    type: "low", reviews: 22, colorPrimary: "white", colorSecondary: "green", stock: 3, price: 120, imgsrc: "img/327casablanca.svg"},

    {id: 2, title: "Adidas Ozweego x Raf Simons", colorway: "Bright Yellow Night Navy Colorway", brand: "adidas", collab: "rafsimons", 
    type: "low", reviews: 22, colorPrimary: "yellow", colorSecondary: "black", stock: 2, "price": 170, imgsrc: "img/adidasraf.svg"},

    {id: 3, title: "Balenciaga Triple S", colorway: "Red / Black Colorway", brand: "balenciaga", collab: null,
    type: "low", reviews: 67, colorPrimary: "black", colorSecondary: "red", stock: 1, price: 300, imgsrc: "img/balenciagasss.svg"},

    {id: 4, title: "Balenciaga Track", colorway: "Orange / Blue Colorway", brand: "balenciaga", collab: null, 
    type: "low", reviews: 44, colorPrimary: "orange", colorSecondary: "blue", stock: 2, price: 375, imgsrc: "img/balenciagatrack.svg"},

    {id: 5, title: "Nike Blazer Mid x Sacai", colorway: "Snow Beach Colorway", brand: "nike", collab: "sacai",
    type: "high", reviews: 39, colorPrimary: "yellow", colorSecondary: "blue", stock: 2, price: 140, imgsrc: "img/blazersacai.svg"},

    {id: 6, title: "Dior B23 High-Top", colorway: "Black / White Colorway", brand: "dior", collab: null, 
    type: "high", reviews: 51, colorPrimary: "white", colorSecondary: "black", stock: 4, price: 350, imgsrc: "img/diorb23.svg"},

    {id: 7, title: "New Balance 990v3 x Stray Rats", colorway: "The Joker Colorway", brand: "newbalance", collab: null,
    type: "low", reviews: 32, colorPrimary: "green", colorSecondary: "purple", stock: 2, price: 160, imgsrc: "img/nb990.svg"},

    {id: 8, title: "New Balance 2002R x Salehe Bembury", colorway: "Peace Be The Journey Colorway", brand: "newbalance", collab: null, 
    type: "low", reviews: 39, colorPrimary: "orange", colorSecondary: null, stock: 3, price: 125, imgsrc: "img/nb2002R.svg"},

    {id: 9, title: "Nike Air Zoom Alphafly Next%", colorway: "Racer Blue / Pink Glow Colorway", brand: "nike", collab: null, 
    type: "low", reviews: 21, colorPrimary: "black", colorSecondary: "green", stock: 1, price: 220, imgsrc: "img/nikealphafly.svg"},

    {id: 10, title: "Nike Adapt BB Mag", colorway: "Wolf Gray Colorway", brand: "nike", collab: null,
    type: "low", reviews: 63, colorPrimary: "grey", colorSecondary: "blue", stock: 4, price: 300, imgsrc: "img/nikebb.svg"},

    {id: 11, title: "Jordan 1 Retro High x OFF-WHITE", colorway: "Chicago Colorway", brand: "nike", collab: "offwhite", 
    type: "high", reviews: 58, colorPrimary: "white", colorSecondary: "red", stock: 3, price: 190, imgsrc: "img/offjordan1.svg"},

    {id: 12, title: "Nike Dunk Low x OFF-WHITE", colorway: "Pine Green Colorway", brand: "nike", collab: "offwhite", 
    type: "low", reviews: 52, colorPrimary: "green", colorSecondary: "orange", stock: 3, "price": 180, imgsrc: "img/offdunklow.svg"},

    {id: 13, title: "Nike Zoom Tempo NEXT% x OFF-WHITE", colorway: "Racer Blue / Pink Glow Colorway", brand: "nike", collab: "offwhite",
    type: "low", reviews: 12, colorPrimary: "pink", colorSecondary: "purple", stock: 1, price: 260, imgsrc: "img/offnikezoom.svg"},

    {id: 14, title: "OFF-WHITE Odsy-2000 SS21", colorway: "Mint Blue Colorway", brand: "offwhite", collab: null, 
    type: "low", reviews: 55, colorPrimary: "blue", colorSecondary: null, stock: 2, price: 275, imgsrc: "img/offodsy2000.svg"},

    {id: 15, title: "Nike Vaporwaffle x Sacai", colorway: "Villain Red Neptune Green Colorway", brand: "nike", collab: "sacai", 
    type: "low", reviews: 40, colorPrimary: "burgundy", colorSecondary: "green", stock: 5, price: 180, imgsrc: "img/wafflesacai.svg"},

    {id: 16, title: "Adidas Yeezy 500", colorway: "Stone Colorway", brand: "adidas", collab: "yeezy",
    type: "low", reviews: 90, colorPrimary: "beige", colorSecondary: null, stock: 4, price: 200, imgsrc: "img/yeezy500.svg"},

    {id: 17, title: "Adidas Yeezy Boost 350 V2", colorway: "Core Black / White Colorway", brand: "adidas", collab: "yeezy", 
    type: "low", reviews: 35, colorPrimary: "black", colorSecondary: "white", stock: 2, "price": 220, imgsrc: "img/yeezy350.svg"},

    {id: 18, title: "Adidas Yeezy 700 V3", colorway: "Arzareth Colorway", brand: "adidas", collab: "yeezy", 
    type: "low", reviews: 73, colorPrimary: "blue", colorSecondary: "white", stock: 3, price: 250, imgsrc: "img/yeezy700.svg"}
]


const colors = ['white','green','black','yellow','red','orange','blue','purple','grey','pink','burgundy','beige']
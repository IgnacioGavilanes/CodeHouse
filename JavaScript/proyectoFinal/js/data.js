/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE INFORMATION REGARDING THE PRODUCTS ON THE PROJECT. WILL MOVE TO JSON FILE EVENTUALLY 
----------------------------------------------------------------------------------------------------------*/

// const storeItems = [
//     {id: 1, title: "New Balance 327 x Casablanca", colorway: "Green Logo Colorway", brand: "newbalance", collab: "casablanca", 
//     type: "low", reviews: 22, colorPrimary: "white", colorSecondary: "green", stock: 3, price: 120, imgsrc: "img/327casablanca.svg"},

//     {id: 2, title: "Adidas Ozweego x Raf Simons", colorway: "Bright Yellow Night Navy Colorway", brand: "adidas", collab: "rafsimons", 
//     type: "low", reviews: 22, colorPrimary: "yellow", colorSecondary: "black", stock: 2, "price": 170, imgsrc: "img/adidasraf.svg"},

//     {id: 3, title: "Balenciaga Triple S", colorway: "Red / Black Colorway", brand: "balenciaga", collab: null,
//     type: "low", reviews: 67, colorPrimary: "black", colorSecondary: "red", stock: 1, price: 300, imgsrc: "img/balenciagasss.svg"},

//     {id: 4, title: "Balenciaga Track", colorway: "Orange / Blue Colorway", brand: "balenciaga", collab: null, 
//     type: "low", reviews: 44, colorPrimary: "orange", colorSecondary: "blue", stock: 2, price: 375, imgsrc: "img/balenciagatrack.svg"},

//     {id: 5, title: "Nike Blazer Mid x Sacai", colorway: "Snow Beach Colorway", brand: "nike", collab: "sacai",
//     type: "high", reviews: 39, colorPrimary: "yellow", colorSecondary: "blue", stock: 2, price: 140, imgsrc: "img/blazersacai.svg"},

//     {id: 6, title: "Dior B23 High-Top", colorway: "Black / White Colorway", brand: "dior", collab: null, 
//     type: "high", reviews: 51, colorPrimary: "white", colorSecondary: "black", stock: 4, price: 350, imgsrc: "img/diorb23.svg"},

//     {id: 7, title: "New Balance 990v3 x Stray Rats", colorway: "The Joker Colorway", brand: "newbalance", collab: null,
//     type: "low", reviews: 32, colorPrimary: "green", colorSecondary: "purple", stock: 2, price: 160, imgsrc: "img/nb990.svg"},

//     {id: 8, title: "New Balance 2002R x Salehe Bembury", colorway: "Peace Be The Journey Colorway", brand: "newbalance", collab: null, 
//     type: "low", reviews: 39, colorPrimary: "orange", colorSecondary: null, stock: 3, price: 125, imgsrc: "img/nb2002R.svg"},

//     {id: 9, title: "Nike Air Zoom Alphafly Next%", colorway: "Racer Blue / Pink Glow Colorway", brand: "nike", collab: null, 
//     type: "low", reviews: 21, colorPrimary: "black", colorSecondary: "green", stock: 1, price: 220, imgsrc: "img/nikealphafly.svg"},

//     {id: 10, title: "Nike Adapt BB Mag", colorway: "Wolf Gray Colorway", brand: "nike", collab: null,
//     type: "low", reviews: 63, colorPrimary: "grey", colorSecondary: "blue", stock: 4, price: 300, imgsrc: "img/nikebb.svg"},

//     {id: 11, title: "Jordan 1 Retro High x OFF-WHITE", colorway: "Chicago Colorway", brand: "nike", collab: "offwhite", 
//     type: "high", reviews: 58, colorPrimary: "white", colorSecondary: "red", stock: 3, price: 190, imgsrc: "img/offjordan1.svg"},

//     {id: 12, title: "Nike Dunk Low x OFF-WHITE", colorway: "Pine Green Colorway", brand: "nike", collab: "offwhite", 
//     type: "low", reviews: 52, colorPrimary: "green", colorSecondary: "orange", stock: 3, "price": 180, imgsrc: "img/offdunklow.svg"},

//     {id: 13, title: "Nike Zoom Tempo NEXT% x OFF-WHITE", colorway: "Racer Blue / Pink Glow Colorway", brand: "nike", collab: "offwhite",
//     type: "low", reviews: 12, colorPrimary: "pink", colorSecondary: "purple", stock: 1, price: 260, imgsrc: "img/offnikezoom.svg"},

//     {id: 14, title: "OFF-WHITE Odsy-2000 SS21", colorway: "Mint Blue Colorway", brand: "offwhite", collab: null, 
//     type: "low", reviews: 55, colorPrimary: "blue", colorSecondary: null, stock: 2, price: 275, imgsrc: "img/offodsy2000.svg"},

//     {id: 15, title: "Nike Vaporwaffle x Sacai", colorway: "Villain Red Neptune Green Colorway", brand: "nike", collab: "sacai", 
//     type: "low", reviews: 40, colorPrimary: "burgundy", colorSecondary: "green", stock: 5, price: 180, imgsrc: "img/wafflesacai.svg"},

//     {id: 16, title: "Adidas Yeezy 500", colorway: "Stone Colorway", brand: "adidas", collab: "yeezy",
//     type: "low", reviews: 90, colorPrimary: "beige", colorSecondary: null, stock: 4, price: 200, imgsrc: "img/yeezy500.svg"},

//     {id: 17, title: "Adidas Yeezy Boost 350 V2", colorway: "Core Black / White Colorway", brand: "adidas", collab: "yeezy", 
//     type: "low", reviews: 35, colorPrimary: "black", colorSecondary: "white", stock: 2, "price": 220, imgsrc: "img/yeezy350.svg"},

//     {id: 18, title: "Adidas Yeezy 700 V3", colorway: "Arzareth Colorway", brand: "adidas", collab: "yeezy", 
//     type: "low", reviews: 73, colorPrimary: "blue", colorSecondary: "white", stock: 3, price: 250, imgsrc: "img/yeezy700.svg"}
// ]

// const colors = ['white','green','black','yellow','red','orange','blue','purple','grey','pink','burgundy','beige']

// window.onload( function () {
//     const params = (new URL(document.location)).searchParams;
//     const bagArrayCheckout = params.get('bagArray');
    
//     $()
// })

// $.ajax({
//     type: "POST",
//     data: {bagArray:bagArray},
//     url: "checkout.html",
//     success: function(msg){
//       $('.answer').html(msg);
//       console.log(bagArray)
//     }
//  });

//  $.ajax({
//     url: "checkout.html"
// ,   type: 'POST'
// ,    data: {bagArray:bagArray}
// ,   contentType: 'application/json'
// ,   data: JSON.stringify(bagArray) //stringify is important
// ,   success: function(msg){
//     $('.answer').html(msg);
//     console.log(bagArray)}
// });



// let num = 0
// for (const identificator of bagArray) {
//   num++
//   localStorage.setItem(num, JSON.stringify({identificator}))
//   }


// WRAP IN DOC READY FUNCTION



//   console.log(localStorage.getItem(num))
let checkoutItems = []
for (let i = 0; i < localStorage.length; i++) {
    //Here key gives us the key for a specific item in localStorage and assigns it to a
    //variable num
    let num = localStorage.key(i); 
    //Now we get the entire object from localStorage but it is still in JSON format
    let retrievedObject = localStorage.getItem(num);
    // window.localStorage.removeItem("undefined");

    //We parse it in order to get a JS object
    let retrievedObjectParsed = JSON.parse(retrievedObject)
    
    //Finally we push into an empty array that will end up containing all objects
    //in localStorage
    checkoutItems.push(retrievedObjectParsed)
}console.log(checkoutItems)

//DON'T THINK I NEED THIS. WHEN I USE THIS I GET AN EXTRA UNDEFINED ELEMENT THAT
//SHOWS UP AS AN ERROR ON CONSOLE
let checkoutItemsInfo = []
for (let iterator = 0; iterator <= checkoutItems.length; iterator++) {
    // console.log(checkoutItems[iterator].identificator)
    // console.log(Object.values(checkoutItems[iterator]))
    // console.log(checkoutItems[iterator])
    checkoutItemsInfo.push(checkoutItems[iterator])
    // let result = objArray.map(a => a.foo);
    // checkoutItemsInfo.push(someArray)
    // console.log(checkoutItemsInfo)
}
// console.log(checkoutItemsInfo[0].itemName)

// let iterator
// for (iterator in checkoutItems[iterator].identificator) {
//     console.log(checkoutItems[iterator].identificator);
// }
    

//IF I DECIDE TO ERASE THE LAST LOOP THAT POPULATES CHECKOUTITEMSINFO 
//I NEED TO CHANGE CHECKOUTINTEMSINFO HERE TO CHECKOUTINTEMS
let itemQtty = 1
for (let i = 0; i <checkoutItems.length; i++) {
    let parentNode = $("#checkout-grid");

    //ACA TENGO QUE AGREGAR QTTY Y .HIDE SI EL ELEMENTO YA EXISTE

    $(parentNode).append(`
        <div class="checkout-item">
            <img src="${checkoutItemsInfo[i].itemImgSrc}" class="co-itemImg" alt="">
            <div class="item-section2"> 
                <h1 class="co-name">${checkoutItemsInfo[i].itemName}</h1>
                <h3 class="co-colorway">${checkoutItemsInfo[i].itemColorway}</h3>
            </div>
            <h3 class='qtty'>X qtty${itemQtty}</h3>
            <h2 class="co-price">${checkoutItemsInfo[i].itemPrice}</h2>
            <input id='co-remove' type="image" src="img/trash.svg"/>
        </div>
        <hr class="co-separator">
    `);
}



function generateId() {
    var orderId = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++)
        orderId += possible.charAt(Math.floor(Math.random() * possible.length));
    return orderId;
  }



$("#finalize").click(function(){
    Swal.fire({
      title: 'Thank you for your order!',
      width: 800,
      showLoaderOnConfirm: false,
      confirmButtonText: 'Take me to the homepage',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      html: `Here is your order ID: ${generateId()}`+
      `<br>
      We will get back to you as soon as we have more information
      regarging your order's shipping`,
    }).then(function (result) {
      if (result.isConfirmed) {
        window.location = "http://localhost:8000"}})})
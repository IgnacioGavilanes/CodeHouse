/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE LOGIC FOR THE FLOW OF OUR WEB APP.
it consumes variables.js, data.js and functions.js.
----------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------
Dynamic products' grid: Now utilizing AJAX & JQuery
----------------------------------------------------------------------------------------------------------*/
let total = bag * taxValue * quantity

$.getJSON(JSONurl, function (response, status) {
  if (status === "success"){
    let dataArray = response;
    let parentNode = $("#product-grid");
    for (const info of dataArray){
      $(parentNode).append(`<div class="card" id=${info.id}>
                              <img src="${info.imgsrc}" class="item-img" alt="">
                              <h1 class="name">${info.title}</h1>
                              <h3 class="colorway">${info.colorway}</h3>
                              <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" id="wishlistButton-card"/>
                              <h2 class="price itemcontainer">$ ${info.price}</h2>
                              <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag" id="bagButton-card"/>
                              <p class="reviews"> ${info.reviews} 🔥</p> 
                            </div>`)
    }
}
})

/*----------------------------------------------------------------------------------------------------------
Executes the following once the DOM is loaded
----------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){

  let bagButton = $(".add-bag"); 
  /*----------------------------------------------------------------------------------------------------------
  UTILIZING A JQUERY SELECTOR, THIS LOOP ITERATES OVER ALL PRODUCTS ADD TO BAG BUTTONS
  functionalities:
  -Obtain data form clicked elements
  -Creates an array with all items in customer's bag
  -Creates a item counter 
  -Creates alerts for when user adds item to bag
  -Shows customer all items in bag and a subtotal
  -Saves items from bag in local storage
  -
  ---To improve: Check stock at the beginning of the loop with a conditional statement and update stock at the end.
    Tax and shipping prices are going to be displayed on checkout page, which I haven't started yet.


  ----------------------------------------------------------------------------------------------------------*/
  for (let i = 0; i < bagButton.length; i++) {
  
    $(bagButton[i]).on('click', addToBagEvent);
    function addToBagEvent (event) {
      
      // if (checkStock()) {

      let bagButtonClicked = event.target
      let addItem = bagButtonClicked.parentElement
      

      
      //NO PUDE LOGRAR UTILIZAR SELECTORES JQUERY PARA RECREAR ESTA ACCION  
      let itemPrice = addItem.getElementsByClassName('price')[0].innerText;
      let itemName = addItem.getElementsByClassName('name')[0].innerText;

      let itemImgSrc = $(this).parent().find('img').attr('src');

      //Once an product's bag icon is clicked, that items price, name, and imgsrc is pushed into the bagArray
      bagArray.push({itemName, itemPrice, itemImgSrc})    
      
      /*----------------------------------------------------------------------------------------------------------
      THIS SHORT SNIPPET IS UTILIZED FOR THE ITEMS COUNTER ON TOP OF THE BAG ICON INSIDE THE NAVBAR.
      Functionality:
      -Allows users to easily see how many items are inside their bag.
      ---To improve: Make it so that the green circle is not displayed when bagCounter < 1.
      ----------------------------------------------------------------------------------------------------------*/
      bagCounter = parseInt(bagArray.length);
      $("#counter").empty().append(bagCounter)

      /*----------------------------------------------------------------------------------------------------------
      TOAST TO SHOW ITEMS IN BAG, TOTAL, AND A BUTTON TO GO TO CHECKOUT
      Functionalities:
      - Creates Toast with all items in bagArray (array containing all elements in the cart)
      - Shows price for each item & total
      - Includes a button to go to checkout page
      ---To improve: styling, colorway, size, show only 1 shoe of each type and add a quantity number, etc
      ----------------------------------------------------------------------------------------------------------*/
      let htmlBagAlert = ``;
      $.each(bagArray, function()
      {
        htmlBagAlert += `<img class='bagalert-img' src="${this.itemImgSrc}">
                        <h2>${this.itemName}</h2>
                        <h3>${this.itemPrice}</h3>
                        <br>` 
      });
      
      $("#bag").click(function(){
        Swal.fire({
          title: 'Your Bag',
          width: 800,
          showLoaderOnConfirm: false,
          confirmButtonText: 'Go To Payment Method',
          showCloseButton: true,
          confirmButtonColor: '#3085d6',
          
          html: `<hr> <br> ${htmlBagAlert}`+
          `<br>
          Your current total is: $${bag}`,
          //Need to add item name, img, price, qtty, total
        }).then(function (result) {
          if (result.isConfirmed) {
            window.location = "checkout.html"
          }
        })
      },)

      /*----------------------------------------------------------------------------------------------------------
      SAVING ITEMS IN BAG TO LOCAL STORAGE
      ----------------------------------------------------------------------------------------------------------*/
      let num = 0
      for (const identificator of bagArray) {
        num++
        if (identificator.itemName === itemName) {
          localStorage.setItem(itemName + num, JSON.stringify({identificator}))
        }
      }
      /*----------------------------------------------------------------------------------------------------------
      TOAST NOTIFICATION TO ALERT USER THAT AN ITEM HAS BEEN ADDED TO THE SHOPPING BAG
      Functionalities:
      - Creates timed Toast notification displaying item name
      ----------------------------------------------------------------------------------------------------------*/
      Swal.fire({
        position: 'top-end',
        toast:true,
        icon: 'success',
        background: 'white',
        html: `<b>${itemName}</b> is now in your bag!`,
        showConfirmButton: false,
        timer: 2000,
      }
      );

      updateBag()

        //add tax
    // }
    
  }//End of for Loop
}

//Updates total 
function updateBag () {
  let bagButtonClicked = event.target
  let addItem = bagButtonClicked.parentElement
  let itemPrice = parseFloat(addItem.getElementsByClassName('price')[0].innerText.substring(2))
  bag = bag + itemPrice
}

  /*----------------------------------------------------------------------------------------------------------
  USE OF TOGGLE TO SHOW/HIDE PRODUCT FILTERS 
  ----------------------------------------------------------------------------------------------------------*/
  $(".filterbtn-container").click(function(){
    $(".sidebar").slideToggle(500)
    $(".filterbtn-container").css({
      "width":"15rem"
    })
  })

  


});//$(document).ready CLOSING TAG


//WISHLIST TOAST - WORK IN PROGRESS
$("#wishlist").click(function(){
  Swal.fire({
    html: '<hr>',
    title: 'Your Wishlist',
    width: 800,
    showLoaderOnConfirm: true,
    showCloseButton: true,
  })})


  /*----------------------------------------------------------------------------------------------------------
  Manipulates DOM depending on whether the review button is clicked (upvoted) or deselected.
  Funcionaba antes pero tengo que actualizarla...
  ----------------------------------------------------------------------------------------------------------*/
 
    
  $(".reviews").click(function () {
    
    let reviewNum = parseInt(this.innerText);
    console.log(reviewNum)
    
    if (this.style.color == "black") {
      this.style.color = "#FF8021";
      this.style.fontWeight = "bold";

      function addReview () {
        // console.log(reviewNum);
        $(".reviews").html(reviewNum + 1);
      }

      addReview();
    }
    
    else {
      this.style.color = "black";
      this.style.fontWeight = "normal";

      function subtractReview() {
        // console.log(reviewNum);
        $(".reviews").html(reviewNum - 1);
      }
      subtractReview();
    }
  });



function newProduct(id, title, colorway, brand, collab, type, reviews, colorPrimary, colorSecondary, stock, price, imgsrc){
  this.id = id;
  this.title = title;
  this.colorway = colorway;
  this.brand = brand;
  this.collab = collab;
  this.type = type;
  this.reviews = reviews;
  this.colorPrimary = colorPrimary;
  this.colorSecondary = colorSecondary;
  this.stock = stock;
  this.price = price;
  this.imgsrc = imgsrc;

  this.getId = function(){
      return this.id;
   }
  this.getTitle = function(){
     return this.title;
  }
  this.getColorway = function(){
      return this.colorway;
  }
  this.getBrand = function(){
      return this.brand;
  }
  this.getCollab = function(){
      return this.collab;
  }
  this.getType = function(){
      return this.type;
  }
  this.getReviews = function(){
      return this.reviews;
  }
  this.getColorPrimary = function(){
    return this.colorprimary;
  }
  this.getColorSecondary = function(){
      return this.colorsecondary;
  }
  this.getStock = function(){
      return this.stock;
  }
  this.getPrice = function(){
      return this.price;
  }
  this.getImgSrc = function(){
      return this.imgsrc;
  }
}


//FUNCIONA
// $(".arrow-left").click(function(){
//   $(".sidebar").fadeOut(100, function(){
//     $(".filters").css({
//       "margin-top":"4rem",
//     })
//     $(".filters-title").css({
//       "display":"block",
//     })
//     $(".collapse-filters").css({
//       "display":"none",
//   })
//   $(".arrow-left").css({
//     "transform":"rotate(180deg)",
//     "transition": "all 3s",
//     "transition-timing": "ease-in-out",
//     "width":"3rem",
//     "height":"auto",
//   })
// })})



//function checkStock () {

  // let bagButton = document.getElementsByClassName('add-bag');
  // for (let i = 0; i < bagButton.length; i++) {
  //   let addToBagButton = bagButton[i]
  //   addToBagButton.addEventListener('click', addToBagEvent);
  //   let bagButtonClicked = event.target
  //   let addItem = bagButtonClicked.parentElement
  //   let initialItemStock = storeItems[i].stock;
  // }
  // // let bagButtonClicked = event.target
  // // let addItem = bagButtonClicked.parentElement
  // let itemStock = initialItemStock - 1 ;
  // // let found = storeItems.find(item => item.id === itemId); 
  // if (0 >= itemStock) {
  //     console.log(`Stock insuficiente. El stock disponible es de ${itemStock}`);
  //     return false
  // }
  // else {
  //     return true
  // }
//}